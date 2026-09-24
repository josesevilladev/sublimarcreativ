import { Clock3, Globe, MapPin, Phone } from 'lucide-react'

const details = [
  { icon: MapPin, text: 'Roquetas de Mar, Almeria' },
  { icon: Phone, text: '+34 642 211 086' },
  { icon: Clock3, text: 'Lun a Sab 10:00 - 20:00' },
]

function FooterSection() {
  return (
    <footer id="ubicacion" className="relative overflow-hidden border-t border-sand-deep/60 bg-sand/50">
      <div className="bloom left-[20%] top-[-40%] h-[20rem] w-[20rem] bg-clay/25" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 text-sm text-cocoa md:grid-cols-3 md:px-8">
        <div className="reveal">
          <p className="font-serif text-2xl tracking-tight text-ink">Sublimar Creativ</p>
          <p className="mt-4 max-w-xs leading-relaxed">
            Regalos personalizados para celebrar recuerdos, amistades y momentos importantes.
          </p>
        </div>

        <ul className="reveal space-y-4">
          {details.map(({ icon: Icon, text }) => (
            <li key={text} className="group inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-sand-deep bg-parchment/70 text-clay transition-colors duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-parchment">
                <Icon size={15} />
              </span>
              {text}
            </li>
          ))}
        </ul>

        <div className="reveal md:text-right">
          <p className="font-semibold uppercase tracking-[0.22em] text-ink">Siguenos</p>
          <a
            href="https://www.facebook.com/share/18Gzd9Jbh9/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-sand-deep bg-parchment/70 px-5 py-2.5 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-clay hover:text-clay-deep"
          >
            <Globe size={16} />
            Facebook
          </a>
          <a
            href="https://wa.me/34642211086"
            className="mt-4 block font-semibold text-olive-deep transition-colors duration-300 hover:text-clay-deep"
          >
            Escribenos por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
