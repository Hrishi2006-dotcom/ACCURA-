import { Link } from 'react-router-dom'

export default function Sidebar() {
  const items = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/uploads', label: 'Uploads' },
    { path: '#', label: 'Reports' },
    { path: '#', label: 'Support' },
    { path: '#', label: 'Settings' },
  ]
  return (
    <aside className="w-48 bg-gray-100 h-full p-4 space-y-2">
      {items.map(i => (
        <Link key={i.label} to={i.path} className="block text-gray-700 hover:underline">
          {i.label}
        </Link>
      ))}
    </aside>
  )
}
