import { ArrowUpRight } from 'lucide-react'
import camisetaPersonalizada from '../../assets/showcase/camiseta-personalizada.png'
import neceserCarla from '../../assets/showcase/neceser-carla.png'
import rocaDecorativa from '../../assets/showcase/roca-decorativa.png'
import tazaCumpleanos from '../../assets/showcase/taza-cumpleanos.png'
import tazaFelicidades from '../../assets/showcase/taza-felicidades.png'
import tazaPapaHeroe from '../../assets/showcase/taza-papa-heroe.png'

const showcaseProducts = [
  {
    name: 'Camisetas personalizadas con fotos',
    image: camisetaPersonalizada,
  },
  {
    name: 'Taza "Mi papa es mi heroe"',
    image: tazaPapaHeroe,
  },
  {
    name: 'Neceser personalizado',
    image: neceserCarla,
  },
  {
    name: 'Roca personalizada con mensaje',
    image: rocaDecorativa,
  },
  {
    name: 'Taza de felicitacion',
    image: tazaFelicidades,
  },
  {
    name: 'Taza de cumpleanos personalizada',
    image: tazaCumpleanos,
  },
]

function ShowcaseSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a2583d]">Escaparate de la tienda</p>
          <h2 className="mt-3 font-serif text-3xl text-[#3d352f] md:text-5xl">Elige el producto que mas te represente</h2>
          <p className="mt-4 max-w-2xl text-base text-[#6a5d52]">
            Trabajamos cada pieza sobre pedido para que puedas enviar una foto, una frase o una idea y convertirla en un regalo especial.
          </p>
        </div>

        <a
          href="https://wa.me/34642211086"
          className="inline-flex items-center gap-2 self-start rounded-full border border-[#c9b29e] bg-[#fffaf4] px-5 py-3 text-sm font-semibold text-[#644f41] transition hover:border-[#b46a4d] hover:text-[#b46a4d]"
        >
          Pedir presupuesto por WhatsApp
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {showcaseProducts.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-2xl border border-[#dbcbbb] bg-[#fffaf4] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#f7efe3] to-[#efe3d6] p-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full rounded-xl object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl text-[#40352d]">{product.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ShowcaseSection
