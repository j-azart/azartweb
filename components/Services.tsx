'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// === Obsah kariet služieb – uprav texty, ikony a href podľa potreby ===
const services = [
  {
    id: 1,
    icon: (
      // Ikona sociálnych sietí
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
        <path d="M8 12h8M12 8v8" strokeLinecap="round" />
        <circle cx="17" cy="7" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="7" cy="7" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="7" cy="17" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Tvorba obsahu na sociálne siete',
    description:
      'Tvorba pútavých príspevkov, príbehov a ďalších kreatívnych foriem obsahu pre vaše sociálne siete na Instagrame, Facebooku a ďalších platformách.',
  },
  {
    id: 2,
    icon: (
      // Ikona firemného videa
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="15" height="10" rx="2" strokeLinecap="round" />
        <path d="M17 10l5-3v10l-5-3V10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Firemné a prezentačné videá',
    description:
      'Videá, ktoré vašu firmu dostanú do popredia. S kvalitnou videoprodukciou zanecháte nezabudnuteľný dojem a zaujmete svojich klientov a partnerov.',
  },
  {
    id: 3,
    icon: (
      // Ikona akcie / eventu
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Zostrihy z akcií a propagačné videá',
    description:
      'Zostrihy z akcií a pútavé propagačné videá z vašej udalosti. Zachytíme dôležité momenty a emócie tak, aby video oslovilo vašu cieľovú skupinu.',
  },
]

// Stagger animácia pre karty
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Services() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="sluzby" className="bg-az-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* === Hlavička sekcie === */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 max-w-2xl"
        >
          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-az-gold mb-4">
            Naše služby
          </p>
          {/* Nadpis sekcie */}
          <h2 className="text-4xl sm:text-5xl font-bold text-az-cream leading-tight mb-5">
            Videoprodukcia
          </h2>
          {/* Úvodný text */}
          <p className="text-az-muted text-base lg:text-lg leading-relaxed">
            Venujeme sa rôznym typom videí, pričom sa špecializujeme na tieto tri hlavné
            kategórie. Sme otvorení aj ďalším formám tvorby — záznamy z koncertov, hudobné
            klipy a mnoho ďalšieho. Vaše nápady sú pre nás výzvou.
          </p>
        </motion.div>

        {/* === Mriežka kariet (1 stĺpec mobile / 3 desktop) === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative flex flex-col gap-5 p-8 rounded-3xl bg-az-card border border-white/5 gold-glow transition-all duration-300 hover:border-az-gold/20 cursor-pointer"
            >
              {/* Ikona v zlatom kruhu */}
              <div className="w-12 h-12 rounded-2xl bg-az-gold/10 flex items-center justify-center text-az-gold group-hover:bg-az-gold/15 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Nadpis karty */}
              <h3 className="text-lg font-semibold text-az-cream leading-snug">
                {service.title}
              </h3>

              {/* Popis karty */}
              <p className="text-sm text-az-muted leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Zlatá šípka napravo – viditeľná pri hoveri */}
              <div className="flex items-center gap-2 text-xs font-medium text-az-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
                Zistiť viac
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === CTA tlačidlá pod kartami === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-3"
        >
          {/* Primárne */}
          <a
            href="#kontakt"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-az-gold text-az-black text-sm font-semibold hover:bg-amber-400 transition-colors duration-200"
          >
            Kontaktovať
          </a>
          {/* Sekundárne */}
          <a
            href="#portfolio"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/20 text-az-cream text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Pozrite si našu prácu
          </a>
        </motion.div>
      </div>
    </section>
  )
}
