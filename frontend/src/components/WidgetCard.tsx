export default function WidgetCard({ title, onDetails }: { title: string; onDetails: () => void }) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <span>{title}</span>
      <button onClick={onDetails} className="text-blue-600 hover:underline">Details</button>
    </div>
  )
}
