import procesoMujerTaller from '../../assets/proceso-mujer-taller.png'

function ArtisanSection() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink py-20 text-parchment md:py-28">
      <div className="bloom left-[-6%] top-[-10%] h-[24rem] w-[24rem] bg-clay/50" />
      <div className="bloom bottom-[-25%] right-[-5%] h-[26rem] w-[26rem] bg-olive/40 [animation-delay:-9s]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
        <div className="reveal order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">El toque artesano</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Cada detalle se trabaja <span className="text-bloom">con mimo</span>
          </h2>
          <p className="mt-7 text-base leading-relaxed text-parchment/75">
            Aqui no hay produccion en cadena. Cada pieza se diseña contigo, se prepara de forma individual y se revisa a mano para que el resultado transmita cercania, dedicacion y autenticidad.
          </p>
          <p className="mt-4 text-base leading-relaxed text-parchment/75">
            Por eso cada regalo que entregamos tiene una personalidad propia, muy lejos del acabado impersonal de una copisteria industrial.
          </p>
        </div>

        <div className="reveal group order-1 md:order-2">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-clay/70 via-gold/50 to-olive/60 p-[1.5px] shadow-[0_50px_90px_-45px_rgba(0,0,0,0.9)]">
            <div className="grain relative overflow-hidden rounded-[2rem] bg-ink-soft p-3">
              {/* Sustituye esta imagen por una foto real de tus manos trabajando o del proceso artesanal */}
              <img
                src={procesoMujerTaller}
                alt="Mujer trabajando en un taller artesanal"
                className="h-[320px] w-full rounded-[1.5rem] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04] md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArtisanSection
