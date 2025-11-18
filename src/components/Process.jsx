import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Discover', desc: 'We align on goals, audience, scope, and success metrics.' },
  { title: 'Design', desc: 'Rapid exploration of brand, UX flows, and high‑fidelity screens.' },
  { title: 'Build', desc: 'Agile development with weekly demos and transparent progress.' },
  { title: 'Launch & Grow', desc: 'Deploy, monitor, and iterate with data‑driven enhancements.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Process</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">A simple, collaborative approach from brief to launch.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-center gap-2 text-blue-200">
                <CheckCircle2 className="text-blue-400" />
                <span className="text-sm">Step {i + 1}</span>
              </div>
              <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
