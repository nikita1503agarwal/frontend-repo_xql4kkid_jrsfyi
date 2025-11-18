export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/80">© {new Date().getFullYear()} Webino Solutions. All rights reserved.</p>
          <div className="text-blue-200/80 flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
