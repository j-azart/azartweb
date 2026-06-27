'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// === Kroky procesu – uprav texty podľa potreby ===
const steps = [
  {
    number: '01',
    title: 'Príprava',
    description:
      'Stretávame sa s klientom a detailne analyzujeme jeho požiadavky a ciele. Spoločne definujeme cieľovú skupinu a spracovávame kreatívne koncepty a scenáre. Príprava zahŕňa plánovanie, výber lokácií, obsadenie a ďalšie kľúčové detaily.',
  },
  {
    number: '02',
    title: 'Produkcia',
    description:
      'V tomto štádiu prenesieme koncepty a plány do života. Realizujeme nahrávanie obsahu v rôznych formátoch a zabezpečujeme, aby každý moment bol zachytený s maximálnou starostlivosťou a profesionalitou.',
  },
  {
    number: '03',
    title: 'Postprodukcia',
    description:
      'Po dokončení natáčania sa venujeme strihu a editácii videí. Pracujeme s grafikou, zvukom a efektami. Pridávame hudbu a dokončujeme potrebné úpravy, aby sme dosiahli optimálnu kvalitu výsledného produktu.',
  },
  {
    number: '04',
    title: 'Zhodnotenie',
    description:
      'Táto fáza nám umožňuje reflektovať nad celým procesom a identifikovať úspechy aj oblasti na zlepšenie. Neustále sa rozvíjame a prispôsobujeme potrebám klientov — ich spokojnosť je pre nás prioritou.',
  },
]

export default function Process() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="proces" className="bg-az-black py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* === Hlavička sekcie === */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-az-gold mb-4">
            Náš postup
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-az-cream leading-tight mb-5">
            Ako prebieha tvorba videa
          </h2>
          <p className="text-az-muted text-base lg:text-lg leading-relaxed">
            Proces tvorby je rozdelený do štyroch fáz: príprava, produkcia,
            postprodukcia a zhodnotenie.
          </p>
        </motion.div>

        {/* === Kroky (stepper) ===
            Desktop: 4 stĺpce s prepájacou linkou
            Mobile: vertikálny zoznam s linkou vľavo
        */}

        {/* ── Desktop stepper ── */}
        <div className="hidden lg:block">
          {/* Číslovaná linka – horizontálna čiara prepája zlaté čísla */}
          <div className="relative mb-10">
            {/* Spojovacia čiara */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-az-gold/25 origin-left"
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="flex flex-col"
                >
                  {/* Zlaté číslo v kruhu */}
                  <div className="w-12 h-12 rounded-full bg-az-card border border-az-gold/30 flex items-center justify-center mb-6 z-10 relative">
                    <span className="font-display font-bold text-az-gold text-sm">
                      {step.number}
                    </span>
                  </div>
                  {/* Názov kroku */}
                  <h3 className="text-lg font-semibold text-az-cream mb-3">
                    {step.title}
                  </h3>
                  {/* Popis kroku */}
                  <p className="text-sm text-az-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile stepper – vertikálny s linkou vľavo ── */}
        <div className="lg:hidden relative">
          {/* Vertikálna zlatá linka */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-az-gold/20" />

          <div className="space-y-10 pl-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative"
              >
                {/* Zlaté číslo v kruhu – absolútne pozicionované na linke */}
                <div className="absolute -left-[4.5rem] w-10 h-10 rounded-full bg-az-card border border-az-gold/35 flex items-center justify-center">
                  <span className="font-display font-bold text-az-gold text-xs">
                    {step.number}
                  </span>
                </div>
                {/* Obsah kroku */}
                <h3 className="text-base font-semibold text-az-cream mb-2">{step.title}</h3>
                <p className="text-sm text-az-muted leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
