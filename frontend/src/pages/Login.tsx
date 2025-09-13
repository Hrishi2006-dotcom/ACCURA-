import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../lib/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password)
    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow space-y-4 w-80">
        <h1 className="text-xl font-bold">Login</h1>
        <input className="border p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 w-full" type="submit">Login</button>
        <p className="text-sm">No account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
      </form>
    </div>
  )
}
