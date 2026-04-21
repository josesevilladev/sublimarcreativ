import { MessageCircle } from 'lucide-react'
import perfilLucia from '../../assets/perfil-lucia.png'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#d8c9b8]/70 bg-[#f8f3ec]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-[#c7b3a0] bg-[#f1e4d6]">
            <img src={perfilLucia} alt="Perfil de Lucia" className="h-full w-full object-cover object-center" />
          </div>
          <div>
            <p className="font-serif text-lg leading-none text-[#4f4339]">Sublimar Creativ</p>
            <p className="text-xs text-[#7b6a5c]">Regalos artesanos</p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-[#5f5349] md:flex">
          <li>
            <a className="transition-colors hover:text-[#a2583d]" href="#productos">
              Productos
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#a2583d]" href="#proceso">
              Proceso
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-[#a2583d]" href="#ubicacion">
              Ubicacion
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/34642211086"
          className="inline-flex items-center gap-2 rounded-full bg-[#6a7c56] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a6a49] md:px-5"
        >
          <MessageCircle size={16} />
          Pedir por WhatsApp
        </a>
      </nav>
    </header>
  )
}

export default Navbar
