'use client'

import { motion } from 'framer-motion'

const data = [
  { label: 'Total Supply', value: '1,000,000,000', unit: '$SLPR' },
  { label: 'Liquidity', value: 'Locked', status: 'PERMANENT' },
  { label: 'Tax', value: '0%', sub: 'Buy & Sell' },
  { label: 'Contract', value: 'Renounced', status: 'IMMUTABLE' },
]

export function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-32 px-6 border-t border-navy-700/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-accent-blue tracking-[0.3em] mb-2">
            CLASSIFIED DATA
          </h2>
          <p className="font-mono text-xs text-white/50 tracking-widest mb-12">
            TOKENOMICS — EYES ONLY
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="terminal-border p-6 bg-navy-900/20 hover:bg-navy-900/40 transition-colors"
              >
                <p className="font-mono text-xs text-white/50 tracking-wider mb-2">{item.label}</p>
                <p className="text-xl font-semibold text-white">
                  {item.value}
                  {item.unit && <span className="text-accent-blue ml-1">{item.unit}</span>}
                </p>
                {item.status && (
                  <p className="font-mono text-xs text-accent-cyan/80 mt-2 tracking-wider">{item.status}</p>
                )}
                {item.sub && (
                  <p className="font-mono text-xs text-white/40 mt-1">{item.sub}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
