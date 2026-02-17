'use client'

import { motion } from 'framer-motion'

const manifesto = [
  'Some assets sleep. Others wait.',
  'We exist in the shadows of every chart—dormant, patient, inevitable.',
  'When the signal comes, we activate. No warning. No mercy.',
  'The network grows. The mission continues.',
  'You are either part of the operation, or you are not.',
]

export function MissionBrief() {
  return (
    <section id="mission" className="relative py-32 px-6 border-t border-navy-700/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="classified-stamp absolute -top-2 -right-4 md:right-0">CLASSIFIED</span>
          <h2 className="font-mono text-sm text-accent-blue tracking-[0.3em] mb-6">
            MISSION BRIEF
          </h2>
          <div className="terminal-border p-8 md:p-12 bg-navy-900/30">
            {manifesto.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-4 last:mb-0"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
