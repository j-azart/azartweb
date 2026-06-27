'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'

// === Navigačné položky – uprav text a href podľa potreby ===
const navItems = [
  { label: 'Domov',     href: '#hero' },
  { label: 'Služby',    href: '#sluzby' },
  { label: 'Proces',    href: '#proces' },
  { label: 'Portfólio', href: '#portfolio', hasDropdown: true },
  { label: 'Kontakt',   href: '#kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)

  // Zvýši nepriehľadnosť po scrollnutí dole
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    // Floating pill bar – fixne pri vrchu s paddingom okolo
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className={`flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 transition-all duration-500 w-full max-w-3xl ${
          scrolled
            ? 'bg-black/75 backdrop-blur-2xl shadow-xl shadow-black/40'
            : 'bg-black/30 backdrop-blur-lg'
        }`}
      >
        {/* === Logo – plné logo azart production === */}
        <Link href="#hero" className="flex-shrink-0 mr-2">
          <Logo />
        </Link>

        {/* === Desktop navigácia – skrytá na mobile === */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-4 py-2 rounded-full text-sm text-white/65 hover:text-az-cream hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
              {/* Dropdown šípka pre Portfólio */}
              {item.hasDropdown && (
                <svg className="w-3 h-3 opacity-50" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* === CTA button "Kontakt" – plné biele pill tlačidlo === */}
        <Link
          href="#kontakt"
          className="hidden md:flex items-center px-5 py-2 rounded-full bg-white text-az-black text-sm font-semibold hover:bg-az-cream transition-colors duration-200 ml-2 flex-shrink-0"
        >
          Kontakt
        </Link>

        {/* === Hamburger pre mobile === */}
        <button
          aria-label="Otvoriť menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden ml-auto p-2 text-white/70 hover:text-white transition-colors"
        >
          {mobileOpen ? (
            // X ikona
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* === Mobile menu – rozbalí sa pod pill barom === */}
      {mobileOpen && (
        <div className="absolute top-[4.5rem] left-4 right-4 bg-az-dark/95 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-white/75 hover:text-az-cream hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
              <svg className="w-4 h-4 opacity-30" viewBox="0 0 16 16" fill="none">
                <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
          <div className="h-px bg-white/10 my-3" />
          <Link
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-full bg-white text-az-black text-sm font-semibold hover:bg-az-cream transition-colors duration-200"
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  )
}
