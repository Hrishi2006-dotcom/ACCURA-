import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import KpiCard from '../components/KpiCard'
import WidgetCard from '../components/WidgetCard'
import ChatDrawer from '../components/ChatDrawer'
import { getKpis, getWidgets } from '../lib/api'

export default function Dashboard() {
  const [kpis, setKpis] = useState<any>({})
  const [widgets, setWidgets] = useState<string[]>([])
  const [drawer, setDrawer] = useState<{ open: boolean; title: string }>({ open: false, title: '' })

  useEffect(() => {
    getKpis().then(setKpis)
    getWidgets().then((data: any) => setWidgets(data.widgets))
  }, [])

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Nav />
        <main className="p-4 space-y-4 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard title="Revenue" value={kpis.revenue} />
            <KpiCard title="Profit" value={kpis.profit} />
            <KpiCard title="Expenses" value={kpis.expenses} />
            <KpiCard title="VAT Owed" value={kpis.vatOwed} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgets.map(w => (
              <WidgetCard key={w} title={w} onDetails={() => setDrawer({ open: true, title: w })} />
            ))}
          </div>
        </main>
      </div>
      <ChatDrawer open={drawer.open} title={drawer.title} onClose={() => setDrawer({ open: false, title: '' })} />
    </div>
  )
}
