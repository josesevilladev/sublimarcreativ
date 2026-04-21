import { ArrowRight } from 'lucide-react'
import heroLucia from '../../assets/hero-lucia.png'

function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:items-center md:px-8 md:pt-20">
      <div className="text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a2583d]">Hecho a mano en tu barrio</p>
        <h1 className="font-serif text-4xl leading-tight text-[#3d352f] md:text-6xl">
          Regalos con alma
          <br />
          para momentos únicos
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6a5d52] md:text-lg">
          Personalizamos tazas, rocas y textiles con un proceso artesanal pensado para emocionar desde el primer vistazo.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/34642211086"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b46a4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9f583c]"
          >
            Quiero mi regalo personalizado
            <ArrowRight size={16} />
          </a>
          <a
            href="#productos"
            className="inline-flex items-center justify-center rounded-full border border-[#ccb7a4] px-6 py-3 text-sm font-semibold text-[#604f43] transition hover:border-[#b46a4d] hover:text-[#b46a4d]"
          >
            Ver catalogo
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[#d8c9b8] bg-[#e8ddcf] p-4 shadow-sm">
        <img
          src={heroLucia}
          alt="Lucia mostrando un regalo personalizado"
          className="h-[380px] w-full rounded-2xl object-cover object-top md:h-[470px]"
        />
      </div>
    </section>
  )
}

export default HeroSection
