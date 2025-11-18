import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-28 md:pt-36 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tight"
              >
                Webino Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 md:mt-6 text-lg md:text-xl text-blue-100 max-w-2xl"
              >
                Digital-first studio crafting websites, e‑commerce, and fintech-ready experiences that convert.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition-colors">
                  Start a project
                </a>
                <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur">
                  Explore services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex items-center gap-4 text-blue-100/80"
              >
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <p>Available for new engagements — 2 week kickoff</p>
              </motion.div>
            </div>

            <div className="md:col-span-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
