import { ArrowUpRight } from 'lucide-react'

const showcaseProducts = [
  {
    name: 'Camisetas personalizadas con fotos',
    image: '/showcase/camiseta-personalizada.png',
  },
  {
    name: 'Taza "Mi papa es mi heroe"',
    image: '/showcase/taza-papa-heroe.png',
  },
  {
    name: 'Neceser personalizado',
    image: '/showcase/neceser-carla.png',
  },
  {
    name: 'Roca personalizada con mensaje',
    image: '/showcase/roca-decorativa.png',
  },
  {
    name: 'Taza de felicitacion',
    image: '/showcase/taza-felicidades.png',
  },
  {
    name: 'Taza de cumpleanos personalizada',
    image: '/showcase/taza-cumpleanos.png',
  },
]

function ShowcaseSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-deep">Escaparate de la tienda</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-ink md:text-6xl">
            Elige el producto que mas te represente
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cocoa">
            Trabajamos cada pieza sobre pedido para que puedas enviar una foto, una frase o una idea y convertirla en un regalo especial.
          </p>
        </div>

        <a
          href="https://wa.me/34642211086"
          className="reveal group inline-flex items-center gap-2 self-start rounded-full border border-sand-deep bg-parchment/70 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition-colors duration-300 hover:border-clay hover:text-clay-deep"
        >
          Pedir presupuesto por WhatsApp
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {showcaseProducts.map((product) => (
          <article
            key={product.name}
            className="reveal group relative overflow-hidden rounded-[1.75rem] border border-sand-deep/70 bg-parchment/70 transition-all duration-500 hover:-translate-y-2 hover:border-clay/40 hover:shadow-[0_45px_75px_-45px_rgba(29,23,20,0.95)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sand to-sand-deep/70 p-4">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(224,163,95,0.45),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="relative h-full w-full rounded-2xl object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <h3 className="font-serif text-xl leading-snug tracking-tight text-ink">{product.name}</h3>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-sand-deep text-clay-deep opacity-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-clay group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ShowcaseSection
