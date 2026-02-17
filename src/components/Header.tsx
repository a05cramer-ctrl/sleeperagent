'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
  { href: '#mission', label: 'MISSION' },
  { href: '#tokenomics', label: 'DATA' },
  { href: '#roadmap', label: 'OPS' },
  { href: '#community', label: 'NETWORK' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-navy-950/80 border-b border-navy-700/50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-accent-blue font-semibold tracking-widest">$SLPR</span>
          <span className="text-navy-500">|</span>
          <span className="text-sm font-medium tracking-wide text-white/90">SLEEPER AGENT</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors font-mono font-semibold"
          >
            TWITTER
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-blue hover:text-accent-blue/80 transition-colors font-mono font-semibold"
          >
            CHART
          </a>
          <span className="text-navy-500">|</span>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors font-mono">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white font-mono text-xs"
          aria-label="Toggle menu"
        >
          {mobileOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-navy-700/50 mt-4 pt-4 flex flex-col gap-4"
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-accent-blue font-mono font-semibold py-2">
              TWITTER
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="text-sm text-accent-blue font-mono font-semibold py-2">
              CHART
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/70 hover:text-white font-mono py-2"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
