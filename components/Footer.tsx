import Logo from '@/components/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-az-black border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center gap-6">

        {/* Logo vycentrované */}
        <Logo />

        {/* Copyright */}
        <p className="text-xs text-az-muted">
          © {year} AZART Production. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  )
}
