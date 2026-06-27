'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'

// === Portfólio položky ===
// Pre kartu s videom vyplň youtubeId – otvorí sa modal s prehrávačom
const portfolioItems = [
  {
    id: 1,
    seed: 'azport1',
    thumbnail: '/zdroje-tepla.png',
    hoverGif: '/zdrojetepla-gif.gif',
    category: 'Dokumentárny film',
    title: 'Nové zdroje tepla na Hornej Nitre',
    featured: true,
    youtubeId: 'TgJ6ytqi9GE',
    modalTitle: 'Dokumentárny film – Nové zdroje tepla na Hornej Nitre',
    // Placeholder text – nahraď reálnym popisom projektu
    modalDescription: 'Dokumentárny film zachytáva príbeh transformácie energetiky na Hornej Nitre, kde miestne komunity hľadajú udržateľné alternatívy k uhliu. Sledujeme ľudí, ktorých životy sú úzko späté s baníckou tradíciou regiónu, a ich pohľad na budúcnosť. Vznikol jedinečný obraz o nádeji, odhodlaní a sile miestneho spoločenstva čeliť výzvam energetickej transformácie.',
  },
  {
    id: 2,
    seed: 'azport2',
    category: 'Youtube relácia',
    title: 'Iná Liga CZ',
    thumbnail: '/inaligaCZ-tiny.jpg',
    hoverGif: '/ilCZ-2.gif',
    featured: false,
    youtubeId: '7LqNUdrv1zs',
    modalTitle: 'Produkcia relácie Iná Liga CZ',
    modalDescription: 'Iná Liga CZ je unikátna športová relácia, ktorá prináša divákom pohľad za oponu amatérskeho futbalu v Českej republike. Zachytili sme autentické príbehy hráčov, trénerov a fanúšikov, ktorí žijú futbalom každý víkend napriek tomu, že nie sú profesionáli. Výsledkom je energická produkcia plná emócií, humoru a skutočnej vášne pre najpopulárnejší šport na svete.',
  },
  {
    id: 3,
    seed: 'azport3',
    category: 'Live klip',
    title: 'Jana Zu - Fénix',
    thumbnail: '/fenixthumb.jpg',
    hoverGif: '/fenix-mini-gif.gif',
    featured: false,
    youtubeId: '7CScv1wTEbQ',
    modalTitle: 'Jana Zu - Fénix (Live)',
    modalDescription: 'Živý klip pre Jana Zu zachytáva výnimočný hudobný moment plný energie a autenticity priamo z pódia. Pieseň Fénix v živom prevedení dostáva úplne nový rozmer vďaka precíznej kameramanskej práci a citlivému strihu, ktorý sleduje každý detail výkonu umelkyne. Výsledkom je vizuálny zážitok, ktorý prenáša diváka priamo do srdca koncertu.',
  },
  {
    id: 4,
    seed: 'azport4',
    category: 'Reportáž pre Refresher',
    title: 'Fight Night Challenge 10',
    thumbnail: '/fnc10-2-tiny.jpg',
    hoverGif: '/fnc10-gif2.gif',
    featured: true,
    youtubeId: 'Bs_QaVcuG3g',
    modalTitle: 'Zákulisie eventu Fight Night Challenge 10 pre REFRESHER',
    modalDescription: 'Na Fight Night Challenge 10 som mal na starosti kameru aj strih, vďaka čomu vznikol autentický pohľad priamo do zákulisia jedného z najpopulárnejších bojových eventov na Slovensku. Kamera zachytila napätie, emócie a príbehy zápasníkov tak, ako ich bežný divák nikdy nevidí. Spolupráca s médiom REFRESHER priniesla obsah, ktorý zaujal státisíce divákov online.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
}

type PortfolioItem = typeof portfolioItems[number]

// === Modal s YouTube videom ===
function VideoModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  // Zatvoriť modal pri stlačení Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Tmavý backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Modal obsah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative z-10 w-full max-w-4xl bg-az-card rounded-3xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Zatvoriť tlačidlo */}
          <button
            onClick={onClose}
            aria-label="Zatvoriť"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* YouTube iframe – autoplay zapnutý, controls zapnuté (pauza, hlasitosť) */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title={item.modalTitle}
            />
          </div>

          {/* Text pod videom */}
          <div className="p-7 space-y-3">
            {/* Nadpis videa – uprav podľa projektu */}
            <h3 className="text-lg font-semibold text-az-cream leading-snug">
              {item.modalTitle}
            </h3>
            {/* Popis – nahraď reálnym textom */}
            <p className="text-sm text-az-muted leading-relaxed">
              {item.modalDescription}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Portfolio() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [hovered,      setHovered]      = useState<number | null>(null)
  const [activeModal,  setActiveModal]  = useState<PortfolioItem | null>(null)

  const handleCardClick = (item: PortfolioItem) => {
    if (item.youtubeId) setActiveModal(item)
  }

  return (
    <section id="portfolio" className="bg-az-surface py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* === Hlavička sekcie === */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-az-gold mb-4">
              Portfólio
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-az-cream leading-tight">
              Dobrá práca hovorí sama za seba:
            </h2>
          </div>
        </motion.div>

        {/* === Video grid === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden group ${
                item.featured ? 'lg:col-span-2' : ''
              } ${item.youtubeId ? 'cursor-pointer' : 'cursor-default'}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleCardClick(item)}
            >
              <Image
                src={
                  hovered === item.id && item.hoverGif
                    ? item.hoverGif
                    : (item.thumbnail ?? `https://picsum.photos/seed/${item.seed}/800/500`)
                }
                alt={item.title}
                fill
                unoptimized={!!(hovered === item.id && item.hoverGif)}
                className={`object-cover transition-transform duration-700 ${
                  hovered === item.id && !item.hoverGif ? 'scale-105' : 'scale-100'
                }`}
              />

              <div
                className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${
                  hovered === item.id ? 'opacity-100' : 'opacity-75'
                }`}
              />

              {/* Play tlačidlo – zobrazí sa len pre karty s videom */}
              {item.youtubeId && (
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hovered === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-az-gold/90 flex items-center justify-center">
                    <svg className="w-5 h-5 text-az-black translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6.3 4.5v11l9-5.5-9-5.5z" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] uppercase tracking-wider text-az-gold mb-1">
                  {item.category}
                </p>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === Sekcia klientov === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-az-muted text-center mb-10">
            Obsah sme tvorili aj pre
          </p>
          <div className="flex justify-center">
            <Image
              src="/web-collage-transparent-white.png"
              alt="Klienti AZART Production"
              width={900}
              height={300}
              className="w-full max-w-3xl object-contain opacity-70 hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>

      {/* === Video modal === */}
      {activeModal && (
        <VideoModal item={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  )
}
