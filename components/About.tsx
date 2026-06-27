'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="o-mne" className="bg-az-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          // Desktop: fotografia vľavo, text vpravo | Mobile: pod sebou
          className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center"
        >

          {/* === Fotografia – nahraď reálnym portrétvom === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/channels4_profile.jpg"
                alt="Jakub – zakladateľ AZART Production"
                fill
                className="object-cover object-top"
              />
              {/* Jemný spodný gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-az-black/40 via-transparent to-transparent" />
            </div>

            {/* Dekoratívny zlatý akcent rámček – vizuálny detail */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border border-az-gold/20 -z-0 hidden lg:block" />

            {/* Rok skúseností – floating badge */}
            <div className="absolute bottom-6 left-6 bg-az-black/80 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-3xl font-bold text-az-gold leading-none">10+</p>
              <p className="text-xs text-az-muted mt-1 leading-snug">
                rokov skúseností<br />vo videoprodukciičný
              </p>
            </div>
          </motion.div>

          {/* === Text – životopis a info o firme === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-az-gold">
              O mne
            </p>

            {/* Nadpis – uprav meno alebo text podľa potreby */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-az-cream leading-tight">
              Volám sa Jakub a stojím za{' '}
              <span className="text-az-gold">AZART</span>{' '}
              production
            </h2>

            {/* Bio text – uprav podľa aktuálnych informácií */}
            <div className="space-y-4 text-az-muted text-sm lg:text-base leading-relaxed">
              <p>
                Od roku 2014 som sa aktívne venoval fotografii a tvorbe videí. Začínal som
                v marketingovej agentúre PiarPro ako fotograf a kameraman, kde som sa
                špecializoval na produktové fotenie, virtuálne prehliadky, portréty a iné.
              </p>
              <p>
                Postupne som rozšíril svoju prácu o tvorbu prezentačných videí,
                dokumentárnych filmov, svadobných highlight videí a ďalšie. Neskôr som
                prevzal kreatívnu časť videoprodukcie v rámci agentúry PiarPro a doteraz
                s nimi spolupracujem.
              </p>
              <p>
                Momentálne žijem vo Zvolene, no svoje služby ponúkam po celej Slovenskej
                republike.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/8" />

            {/* Kľúčové štatistiky / fakty */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {[
                { value: '10+', label: 'rokov praxe' },
                { value: '200+', label: 'projektov' },
                { value: '50+', label: 'klientov' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-az-cream">{stat.value}</p>
                  <p className="text-xs text-az-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-az-gold text-az-black text-sm font-semibold hover:bg-amber-400 transition-colors duration-200"
              >
                Napíšte mi
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
