import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import perfilLucia from '../../assets/perfil-lucia.png'

const links = [
  { href: '#productos', label: 'Productos' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#ubicacion', label: 'Ubicacion' },
]

function Navbar() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-500 ${
        scrolled
          ? 'border-b border-sand-deep/60 bg-parchment/80 shadow-[0_10px_40px_-24px_rgba(29,23,20,0.5)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a href="#" className="group flex items-center gap-3">
          <span className="relative block rounded-full p-[2px] transition-transform duration-500 group-hover:scale-105">
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--color-clay),var(--color-gold),var(--color-olive),var(--color-clay))] opacity-80" />
            <span className="relative block h-11 w-11 overflow-hidden rounded-full border-2 border-parchment bg-sand">
              <img src={perfilLucia} alt="Perfil de Lucia" className="h-full w-full object-cover object-center" />
            </span>
          </span>
          <span className="block">
            <span className="block font-serif text-lg leading-none tracking-tight text-ink">Sublimar Creativ</span>
            <span className="mt-1 hidden text-[0.68rem] uppercase tracking-[0.22em] text-cocoa sm:block">Regalos artesanos</span>
          </span>
        </a>

        <ul className="hidden items-center gap-2 rounded-full border border-sand-deep/60 bg-parchment/60 px-2 py-1.5 text-sm font-medium text-cocoa backdrop-blur md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                className="relative block rounded-full px-4 py-1.5 transition-colors duration-300 hover:bg-sand hover:text-clay-deep"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/34642211086"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-olive px-4 py-2.5 text-xs font-semibold whitespace-nowrap text-parchment shadow-[0_12px_30px_-14px_rgba(109,127,88,0.9)] transition-transform duration-300 hover:-translate-y-0.5 sm:text-sm md:px-5"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <MessageCircle size={16} className="relative" />
          <span className="relative">Pedir por WhatsApp</span>
        </a>
      </nav>

      <div
        className="h-[2px] origin-left bg-gradient-to-r from-clay via-gold to-olive transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </header>
  )
}

export default Navbar
