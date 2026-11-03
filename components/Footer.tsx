import Logo from '@/components/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-az-black border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center gap-6">

        {/* Logo vycentrované */}
        <Logo />

        {/* Údaje o spoločnosti */}
        <div className="text-xs text-az-muted text-center leading-relaxed space-y-1">
          <p className="font-medium text-az-cream">AZART production s.r.o.</p>
          <p>Sídlo: Lieskovská cesta 2298/4, 960 01 Zvolen</p>
          <p>IČO: 55557139 · DIČ: 2122020956 · IČ DPH: SK2122020956</p>
          <p>
            Spoločnosť s ručením obmedzeným zapísaná v Obchodnom registri
            Okresného súdu Banská Bystrica, oddiel: Sro, vložka č. 46715/S
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-az-muted">
          © {year} AZART Production. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  )
}
