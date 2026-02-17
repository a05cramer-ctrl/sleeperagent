'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-navy-700/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="font-mono text-accent-blue font-semibold tracking-widest">$SLPR</span>
          <span className="text-navy-500">|</span>
          <span className="text-sm text-white/60">SLEEPER AGENT</span>
        </motion.div>
        <p className="font-mono text-xs text-white/40 tracking-wider">
          ACTIVATED WHEN YOU LEAST EXPECT IT.
        </p>
      </div>
    </footer>
  )
}
