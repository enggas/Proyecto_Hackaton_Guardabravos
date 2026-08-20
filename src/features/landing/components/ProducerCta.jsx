import { Link } from 'react-router-dom'

export const ProducerCta = () => {
  return (
    <section id="productor" className="bg-brand-700">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Sos productor?</h2>
        <p className="text-brand-200 mb-8">
          Publicá tus cosechas y llegá directo a compradores en toda Nicaragua.
          Sin comisiones sobre ventas.
        </p>
        <Link
          to="/registro"
          className="inline-block px-6 py-3 bg-white hover:bg-brand-50 text-brand-700 font-semibold rounded-lg transition-colors"
        >
          Registrate gratis →
        </Link>
      </div>
    </section>
  )
}
