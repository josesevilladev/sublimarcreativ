import { Gem, Package, Shirt } from 'lucide-react'

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
    <section id="productos" className="border-y border-[#e1d3c4] bg-[#f4ede4] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a2583d]">Productos destacados</p>
        <h2 className="mt-3 font-serif text-3xl text-[#3d352f] md:text-5xl">Tu idea, en una pieza inolvidable</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-[#d8c9b8] bg-[#fffaf4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-full bg-[#e9ddce] p-3 text-[#a2583d]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[#44392f]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#675a4e]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
