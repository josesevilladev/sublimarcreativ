import procesoMujerTaller from '../../assets/proceso-mujer-taller.png'

function ArtisanSection() {
  return (
    <section id="proceso" className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
      <div className="order-2 md:order-1">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6a7c56]">El toque artesano</p>
        <h2 className="mt-3 font-serif text-3xl text-[#3d352f] md:text-5xl">Cada detalle se trabaja con mimo</h2>
        <p className="mt-6 text-base leading-relaxed text-[#6a5d52]">
          Aqui no hay produccion en cadena. Cada pieza se diseña contigo, se prepara de forma individual y se revisa a mano para que el resultado transmita cercania, dedicacion y autenticidad.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#6a5d52]">
          Por eso cada regalo que entregamos tiene una personalidad propia, muy lejos del acabado impersonal de una copisteria industrial.
        </p>
      </div>

      <div className="order-1 overflow-hidden rounded-3xl border border-[#d8c9b8] bg-[#e5dacb] p-4 md:order-2">
        {/* Sustituye esta imagen por una foto real de tus manos trabajando o del proceso artesanal */}
        <img
          src={procesoMujerTaller}
          alt="Mujer trabajando en un taller artesanal"
          className="h-[320px] w-full rounded-2xl object-cover md:h-[430px]"
        />
      </div>
    </section>
  )
}

export default ArtisanSection
