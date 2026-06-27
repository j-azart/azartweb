'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="kontakt" className="bg-az-black py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* === Hlavička === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-az-gold mb-4">
            Kontakt
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-az-cream leading-tight mb-5">
            Tešíme sa na spoluprácu
          </h2>
          <p className="text-az-muted text-base lg:text-lg leading-relaxed max-w-lg">
            Či už potrebujete konzultáciu, cenovú ponuku alebo jednoducho máte
            otázku — neváhajte sa ozvať.
          </p>
        </motion.div>

        {/* === Kontaktné možnosti === */}
        <div className="flex flex-col sm:flex-row gap-5 mb-12">

          {/* Telefón */}
          <motion.a
            href="tel:+421951440885"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group flex items-center gap-5 flex-1 p-7 rounded-3xl bg-az-card border border-white/5 hover:border-az-gold/25 transition-all duration-300 gold-glow"
          >
            <div className="w-12 h-12 rounded-2xl bg-az-gold/10 flex items-center justify-center flex-shrink-0 text-az-gold group-hover:bg-az-gold/18 transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-az-muted uppercase tracking-wider mb-1">Telefón</p>
              {/* Uprav telefónne číslo */}
              <p className="text-xl font-semibold text-az-cream group-hover:text-white transition-colors duration-200">
                +421 951 440 885
              </p>
            </div>
          </motion.a>

          {/* E-mail */}
          <motion.a
            href="mailto:azart@azart.sk"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group flex items-center gap-5 flex-1 p-7 rounded-3xl bg-az-card border border-white/5 hover:border-az-gold/25 transition-all duration-300 gold-glow"
          >
            <div className="w-12 h-12 rounded-2xl bg-az-gold/10 flex items-center justify-center flex-shrink-0 text-az-gold group-hover:bg-az-gold/18 transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-az-muted uppercase tracking-wider mb-1">E-mail</p>
              {/* Uprav e-mailovú adresu */}
              <p className="text-xl font-semibold text-az-cream group-hover:text-white transition-colors duration-200">
                azart@azart.sk
              </p>
            </div>
          </motion.a>
        </div>

        {/* === Dostupnosť === */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="text-sm text-az-muted">
            Momentálne sme dostupný pre nové projekty
          </p>
        </motion.div>

      </div>
    </section>
  )
}
