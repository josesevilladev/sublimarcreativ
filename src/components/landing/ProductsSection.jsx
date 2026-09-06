import { Gem, Package, Shirt } from 'lucide-react'
import { trackSpotlight } from '../../lib/spotlight'

const products = [
  {
    title: 'Ceramica',
    description: 'Tazas y piezas para desayuno, oficina o celebraciones especiales.',
    icon: Package,
  },
  {
    title: 'Textiles',
    description: 'Cojines y bolsas personalizadas para dar un toque unico a cualquier hogar.',
    icon: Shirt,
  },
  {
    title: 'Piedra Decorativa',
    description: 'Rocas intervenidas a mano con mensajes, nombres o ilustraciones.',
    icon: Gem,
  },
]

function ProductsSection() {
  return (
    <section id="productos" className="relative overflow-hidden border-y border-sand-deep/60 bg-sand/45 py-20 md:py-28">
      <div className="bloom right-[-10%] top-[10%] h-[22rem] w-[22rem] bg-gold/30" />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-deep">Productos destacados</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-6xl">
            Tu idea, en una pieza inolvidable
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              onPointerMove={trackSpotlight}
              className="spotlight reveal group relative overflow-hidden rounded-[1.75rem] border border-sand-deep/70 bg-parchment/80 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-clay/40 hover:shadow-[0_40px_70px_-45px_rgba(29,23,20,0.9)]"
            >
              <span className="absolute right-6 top-6 font-serif text-5xl text-sand-deep/70 transition-colors duration-500 group-hover:text-clay/30">
                0{index + 1}
              </span>
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-clay to-gold p-3 text-parchment shadow-[0_16px_30px_-18px_rgba(193,97,60,1)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 font-serif text-2xl tracking-tight text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa">{description}</p>
              <span className="mt-6 block h-px w-0 bg-gradient-to-r from-clay to-gold transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
