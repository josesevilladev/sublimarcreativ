const words = ['Tazas personalizadas', 'Textiles', 'Piedra decorativa', 'Hecho a mano', 'Sobre pedido', 'Roquetas de Mar']

function MarqueeBand() {
  return (
    <div className="relative overflow-hidden border-y border-clay-deep/40 bg-clay py-4 text-parchment">
      <div className="marquee marquee-slow">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {words.map((word) => (
              <span key={word} className="flex items-center whitespace-nowrap">
                <span className="px-6 font-serif text-lg tracking-tight md:text-2xl">{word}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeBand
