import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // === Firemné farby AZART Production ===
      colors: {
        'az-teal':    '#1E4B5D', // tmavá modrozelená
        'az-gold':    '#DF9A10', // teplá zlatá – hlavný akcent
        'az-green':   '#46584C', // tlmená zelená

        // Tmavé pozadie – cinematic warm blacks
        'az-black':   '#0C0B09',
        'az-dark':    '#111110',
        'az-surface': '#181614',
        'az-card':    '#1D1B18',
        'az-warm':    '#262320',

        // Text
        'az-cream':   '#F0EDE8', // primárny text
        'az-muted':   '#8A8580', // sekundárny / popisný text
      },
      // === Fonty ===
      fontFamily: {
        sans:    ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-playfair)', 'ui-serif', 'Georgia'],
      },
      // === Animácie ===
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
