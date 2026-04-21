import { Clock3, Globe, MapPin, Phone } from 'lucide-react'

function FooterSection() {
  return (
    <footer id="ubicacion" className="border-t border-[#d8c9b8] bg-[#efe6da]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 text-sm text-[#5f5349] md:grid-cols-3 md:px-8">
        <div>
          <p className="mt-3 leading-relaxed">
            Regalos personalizados para celebrar recuerdos, amistades y momentos importantes.
          </p>
        </div>

        <div className="space-y-3">
          <p className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-[#a2583d]" />
            Roquetas de Mar, Almeria
          </p>
          <p className="inline-flex items-center gap-2">
            <Phone size={16} className="text-[#a2583d]" />
            +34 642 211 086
          </p>
          <p className="inline-flex items-center gap-2">
            <Clock3 size={16} className="text-[#a2583d]" />
            Lun a Sab 10:00 - 20:00
          </p>
        </div>

        <div className="md:text-right">
          <p className="font-semibold text-[#4f4339]">Siguenos</p>
          <a
            href="https://www.facebook.com/share/18Gzd9Jbh9/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#ceb9a8] px-4 py-2 font-medium transition hover:border-[#a2583d] hover:text-[#a2583d]"
          >
            <Globe size={16} />
            Facebook
          </a>
          <a
            href="https://wa.me/34642211086"
            className="mt-3 block text-sm font-semibold text-[#6a7c56] transition hover:text-[#50603f]"
          >
            Escribenos por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
