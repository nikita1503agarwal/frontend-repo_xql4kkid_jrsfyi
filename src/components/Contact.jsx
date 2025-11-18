import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState({ state: 'idle' })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading' })

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus({ state: 'success' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Tell us about your project and we’ll get back within 24 hours.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="company" placeholder="Company (optional)" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <select name="service" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" className="bg-slate-900">Select a service</option>
                <option value="web-dev" className="bg-slate-900">Web Design & Development</option>
                <option value="ecommerce" className="bg-slate-900">E-commerce Solutions</option>
                <option value="branding" className="bg-slate-900">Branding & UI/UX</option>
                <option value="seo" className="bg-slate-900">SEO & Performance</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select name="budget" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" className="bg-slate-900">Budget</option>
                <option value="<5k" className="bg-slate-900">Under $5k</option>
                <option value="5-15k" className="bg-slate-900">$5k - $15k</option>
                <option value=">15k" className="bg-slate-900">$15k+</option>
              </select>
              <select name="timeline" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" className="bg-slate-900">Timeline</option>
                <option value="asap" className="bg-slate-900">ASAP</option>
                <option value="1-2 months" className="bg-slate-900">1-2 months</option>
                <option value=">2 months" className="bg-slate-900">2+ months</option>
              </select>
            </div>
            <textarea name="message" required placeholder="Project details" rows="5" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />

            <button type="submit" disabled={status.state==='loading'} className="w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition">
              {status.state === 'loading' ? 'Sending…' : 'Send message'}
            </button>

            {status.state === 'success' && (
              <p className="text-green-400">Thanks! We’ll be in touch soon.</p>
            )}
            {status.state === 'error' && (
              <p className="text-red-400">Something went wrong: {status.message}</p>
            )}
          </form>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-blue-100">
            <h3 className="text-white font-semibold">Why partner with us?</h3>
            <ul className="mt-4 space-y-3 list-disc list-inside">
              <li>Design‑driven development with measurable outcomes</li>
              <li>Transparent pricing and weekly progress demos</li>
              <li>SEO‑ready, performant, and accessible builds</li>
              <li>Launch support, analytics, and growth roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
