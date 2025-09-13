export default function ChatDrawer({ open, title, onClose }: { open: boolean; title: string; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg p-4">
      <button onClick={onClose} className="text-gray-500 float-right">Close</button>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">Chat coming soon.</p>
    </div>
  )
}
