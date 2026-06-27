'use client'

import { motion } from 'framer-motion'

// YouTube video ID pozadia – zmeň ak chceš iné video
const BG_VIDEO_ID = 'K9ox6uj_7lw'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* === Pozadie – YouTube video v slučke ===
          Iframe je škálovaný aby vždy pokryl celý viewport (16:9 trick).
          pointer-events: none zabraňuje interakcii s videem.
      */}
      <div className="absolute inset-0 bg-az-black overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',    /* 16:9 pomer pri šírke 100vw */
            minHeight: '100vh',
            minWidth: '177.78vh', /* 16:9 pomer pri výške 100vh */
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${BG_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${BG_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0`}
            allow="autoplay; fullscreen"
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="AZART Production – pozadie"
          />
        </div>

        {/* Stmavenie – gradient navrch a dole, ľavý pre čitateľnosť textu */}
        <div className="absolute inset-0 bg-gradient-to-b from-az-black/80 via-az-black/40 to-az-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-az-black/75 via-az-black/20 to-transparent" />
      </div>

      {/* === Obsah – centrovaný text a tlačidlá === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8"
        >
          {/* Hlavný nadpis – na zmenu textu uprav obsah h1 nižšie */}
          <h1 className="text-5xl sm:text-[60px] font-bold leading-[1.06] text-az-cream tracking-tight">
            Zachytávame{' '}
            <span className="whitespace-nowrap">
              <span className="font-display italic font-normal text-az-gold">emócie</span>
              {' '}a{' '}
              <span className="font-display italic font-normal text-az-gold">príbehy</span>
            </span>
            {' '}
            <br className="hidden sm:block" />
            prostredníctvom{' '}
            <br className="hidden lg:block" />
            jedinečných videí.
          </h1>

          {/* Podporný text */}
          <p className="text-base lg:text-lg text-az-muted leading-relaxed max-w-md">
            Profesionálna videoprodukcia, ktorá dáva vašim myšlienkam vizuálnu
            podobu — od prvého nápadu až po finálny strih.
          </p>

          {/* CTA tlačidlá */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-az-cream text-az-black text-sm font-semibold hover:bg-white transition-colors duration-200"
            >
              Pozrite si našu tvorbu
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/30 text-az-cream text-sm hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
