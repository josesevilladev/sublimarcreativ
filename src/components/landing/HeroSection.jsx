import { ArrowRight, Sparkles } from 'lucide-react'
import heroLucia from '../../assets/hero-lucia.png'

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bloom left-[-12%] top-[-18%] h-[26rem] w-[26rem] bg-clay/45" />
      <div className="bloom right-[-8%] top-[6%] h-[22rem] w-[22rem] bg-gold/45 [animation-delay:-6s]" />
      <div className="bloom bottom-[-20%] left-[38%] h-[24rem] w-[24rem] bg-olive/35 [animation-delay:-12s]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.05fr_1fr] md:items-center md:px-8 md:pt-24">
        <div className="reveal text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-clay/25 bg-parchment/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-clay-deep backdrop-blur">
            <Sparkles size={14} />
            Hecho a mano en tu barrio
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
            Regalos <span className="text-bloom">con alma</span>
            <br />
            para momentos únicos
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cocoa md:text-lg">
            Personalizamos tazas, rocas y textiles con un proceso artesanal pensado para emocionar desde el primer vistazo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/34642211086"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-parchment shadow-[0_20px_45px_-20px_rgba(193,97,60,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Quiero mi regalo personalizado</span>
              <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-full border border-sand-deep bg-parchment/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-clay hover:text-clay-deep"
            >
              Ver catalogo
            </a>
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-br from-clay/25 via-gold/20 to-olive/25 blur-2xl" />
          <div className="grain relative overflow-hidden rounded-[2rem] border border-sand-deep/80 bg-sand p-3 shadow-[0_40px_80px_-40px_rgba(29,23,20,0.7)]">
            <img
              src={heroLucia}
              alt="Lucia mostrando un regalo personalizado"
              className="h-[380px] w-full rounded-[1.5rem] object-cover object-top transition-transform duration-[1.2s] hover:scale-[1.03] md:h-[500px]"
            />
          </div>

          <div className="float-slow absolute -bottom-6 -left-4 rounded-2xl border border-sand-deep/70 bg-parchment/90 px-5 py-3 shadow-[0_20px_45px_-25px_rgba(29,23,20,0.8)] backdrop-blur md:-left-10">
            <p className="font-serif text-2xl text-ink">100%</p>
            <p className="text-xs uppercase tracking-[0.18em] text-cocoa">Piezas unicas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
