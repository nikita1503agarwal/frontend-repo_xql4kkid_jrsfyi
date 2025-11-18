import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const links = [
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'work', label: 'Work' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/10 dark:bg-slate-900/40 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white shadow-md">
                <Sparkles size={20} />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-white tracking-tight">Webino Solutions</p>
                <p className="text-xs text-blue-100/80">Digital services for modern brands</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-blue-100 hover:text-white transition-colors">
                  {l.label}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:shadow-lg transition-shadow">
                Start a project
              </button>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {links.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left text-blue-100 hover:text-white py-2">
                  {l.label}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="w-full mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium">
                Start a project
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
