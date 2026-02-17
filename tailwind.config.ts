import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0f1a',
          900: '#0d1424',
          800: '#111827',
          700: '#1a2744',
          600: '#1e3a5f',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'radar-pulse': 'radar-pulse 3s ease-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
      },
      keyframes: {
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'radar-pulse': {
          '0%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '0.1', transform: 'scale(1)' },
          '100%': { opacity: '0.4', transform: 'scale(0.95)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        'spotlight-hero': 'radial-gradient(ellipse 100% 80% at 50% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}

export default config
