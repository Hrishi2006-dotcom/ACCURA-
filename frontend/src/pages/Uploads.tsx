import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { getUploads, markUploadReceived } from '../lib/api'

interface Upload { name: string; received: boolean }

export default function Uploads() {
  const [uploads, setUploads] = useState<Upload[]>([])

  useEffect(() => {
    getUploads().then((data: any) => setUploads(data.uploads))
  }, [])

  const toggle = async (name: string) => {
    const res = await markUploadReceived(name)
    setUploads(u => u.map(it => (it.name === res.upload.name ? res.upload : it)))
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Nav />
        <main className="p-4 space-y-4">
          {uploads.map(u => (
            <div key={u.name} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <span>{u.name}</span>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked={u.received} onChange={() => toggle(u.name)} />
                <span>Mark received</span>
              </label>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
