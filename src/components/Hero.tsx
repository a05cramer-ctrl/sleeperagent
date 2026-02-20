'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { LINKS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Spotlight gradient */}
      <div className="absolute inset-0 bg-spotlight-hero pointer-events-none" />
      
      {/* Subtle radar rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent-blue/10 animate-radar-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent-blue/15 animate-radar-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-accent-blue/20 animate-radar-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Radar sweep line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[300px] h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent origin-center animate-radar-sweep" />
      </div>

      {/* Agent hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl mb-8 px-4"
      >
        <Image
          src="/hero-agent.png"
          alt="Sleeper Agent - silhouette under spotlight"
          width={600}
          height={800}
          priority
          className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.2)]"
        />
      </motion.div>

      {/* Tagline & CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="sr-only">Sleeper Agent - $SLPR</h1>
        <p className="font-mono text-accent-blue/90 text-lg md:text-xl tracking-widest mb-2">
          $SLPR
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/80 text-xl md:text-2xl font-light tracking-wide max-w-xl mx-auto mb-12"
        >
          Activated When You Least Expect It.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={LINKS.pump}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent-blue text-white font-mono text-sm tracking-wider hover:bg-accent-blue/90 transition-all border border-accent-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              ACTIVATE $SLPR
            </a>
            <a
              href="#mission"
              className="px-8 py-3 border border-white/30 text-white font-mono text-sm tracking-wider hover:bg-white/5 hover:border-white/50 transition-all"
            >
              ACCESS BRIEFING
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent-blue text-white font-mono text-sm tracking-wider hover:bg-accent-blue/90 transition-all border border-accent-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              TWITTER
            </a>
            <a
              href={LINKS.dexscreener}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 text-white font-mono text-sm tracking-wider hover:bg-white/5 hover:border-white/50 transition-all"
            >
              CHART
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent-blue/50 to-transparent" />
      </motion.div>
    </section>
  )
}
