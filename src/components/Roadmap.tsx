'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'DORMANT',
    status: 'COMPLETE',
    description: 'Asset deployed. Network silent. Awaiting signal.',
  },
  {
    phase: 'ACTIVATION',
    status: 'ACTIVE',
    description: 'Community assembly. First operatives online. Briefing distributed.',
  },
  {
    phase: 'INFILTRATION',
    status: 'PENDING',
    description: 'CEX listings. Strategic partnerships. Market penetration.',
  },
  {
    phase: 'GLOBAL CONTROL',
    status: 'PENDING',
    description: 'Dominance achieved. The sleeper network is everywhere.',
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6 border-t border-navy-700/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-accent-blue tracking-[0.3em] mb-2">
            OPERATION PHASES
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-widest mb-16">
            ROADMAP — RESTRICTED
          </p>

          <div className="space-y-1">
            {phases.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group terminal-border flex flex-col md:flex-row md:items-center gap-4 p-6 bg-navy-900/20 hover:bg-navy-900/40 transition-colors border-l-2 border-l-accent-blue/30"
              >
                <div className="flex md:w-48 shrink-0 items-center gap-3">
                  <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  <span className="font-mono text-sm font-semibold text-white tracking-wider">
                    {item.phase}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white/80 font-light">{item.description}</p>
                </div>
                <span
                  className={`font-mono text-xs tracking-wider shrink-0 ${
                    item.status === 'COMPLETE'
                      ? 'text-accent-cyan'
                      : item.status === 'ACTIVE'
                      ? 'text-accent-blue animate-glow-pulse'
                      : 'text-white/40'
                  }`}
                >
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
