import type { Metadata } from 'next'
import { Inter, Playfair_Display, Nunito } from 'next/font/google'
import './globals.css'

// === Sans-serif font pre telo a nadpisy ===
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

// === Font loga – Nunito Black pre "azart", Nunito Light pre "production" ===
const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['300', '900'],
})

// === Serif display font – používa sa LEN pre {emócie} v hérosi ===
const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'AZART Production – Profesionálna videoprodukcia',
  description:
    'Zachytávame emócie a príbehy prostredníctvom jedinečných obrazov a videí. Videoprodukcia, tvorba obsahu pre sociálne siete, firemné videá a záznamy z akcií.',
  openGraph: {
    title: 'AZART Production',
    description: 'Profesionálna videoprodukcia na Slovensku.',
    locale: 'sk_SK',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className={`${inter.variable} ${playfair.variable} ${nunito.variable}`}>
      <body className="bg-az-black text-az-cream font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
