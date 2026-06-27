import Image from 'next/image'

interface LogoProps {
  className?: string
}

// === Logo AZART Production ===
// Používa reálny PNG súbor z public/logo.png (štvorcový formát s priehľadným pozadím)
export default function Logo({ className = '' }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="AZART Production"
      width={120}
      height={55}
      className={`object-contain ${className}`}
      priority
    />
  )
}
