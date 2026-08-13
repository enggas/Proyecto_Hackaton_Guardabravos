import { Search, MessageCircle, Package } from 'lucide-react'

const PASOS = [
  {
    numero: 1,
    icono: Search,
    titulo: 'Explorá',
    descripcion: 'Ve productos frescos disponibles hoy, con precio y calidad clara.',
  },
  {
    numero: 2,
    icono: MessageCircle,
    titulo: 'Contactá',
    descripcion: 'Hablá directo con el productor por WhatsApp. Sin comisiones.',
  },
  {
    numero: 3,
    icono: Package,
    titulo: 'Recibí',
    descripcion: 'Elegí recogida o entrega con transportistas locales verificados.',
  },
]

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="border-t border-b border-line bg-mint">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-xs font-semibold tracking-widest text-brand-400 mb-2">
          CÓMO FUNCIONA
        </p>
        <h2 className="text-3xl font-bold text-ink mb-12">
          Tres pasos, sin complicaciones
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PASOS.map(({ numero, icono: Icono, titulo, descripcion }) => (
            <div
              key={numero}
              className="bg-white border border-line rounded-2xl p-8 text-left"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white text-sm font-semibold mb-4">
                {numero}
              </span>
              <Icono className="w-6 h-6 text-brand-700 mb-3" />
              <h3 className="text-lg font-bold text-ink mb-2">{titulo}</h3>
              <p className="text-sm text-body">{descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
