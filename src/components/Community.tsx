'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'TELEGRAM', href: '#', desc: 'Primary comms' },
  { label: 'TWITTER', href: 'https://x.com/SleeperAgentDev', desc: 'Intel feed' },
  { label: 'DEXSCREENER', href: '#', desc: 'Live data' },
]

export function Community() {
  return (
    <section id="community" className="relative py-32 px-6 border-t border-navy-700/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-accent-blue tracking-[0.3em] mb-2">
            THE NETWORK
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-widest mb-16">
            COMMUNITY — JOIN THE OPERATION
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="terminal-border block p-6 bg-navy-900/20 hover:bg-navy-900/50 hover:border-accent-blue/30 transition-all group"
              >
                <p className="font-mono text-sm font-semibold text-white tracking-wider group-hover:text-accent-blue transition-colors">
                  {link.label}
                </p>
                <p className="font-mono text-xs text-white/50 mt-2">{link.desc}</p>
                <span className="inline-block mt-4 text-accent-blue/80 text-xs font-mono group-hover:text-accent-blue transition-colors">
                  CONNECT →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
