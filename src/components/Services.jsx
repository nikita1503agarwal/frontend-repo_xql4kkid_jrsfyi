import { Code2, ShoppingBag, Palette, Rocket } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/services`).then(r => r.json()).then(setServices).catch(() => {})
  }, [])

  const iconMap = {
    'web-dev': Code2,
    'ecommerce': ShoppingBag,
    'branding': Palette,
    'seo': Rocket,
  }

  return (
    <section id="services" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.12),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">End‑to‑end digital services to launch and grow your brand.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.id] || Code2
            return (
              <div key={s.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center shadow">
                  <Icon />
                </div>
                <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-blue-100/90">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
