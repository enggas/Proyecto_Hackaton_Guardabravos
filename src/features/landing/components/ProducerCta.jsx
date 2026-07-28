export const ProducerCta = () => {
  return (
    <section id="productor" className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Sos productor?</h2>
        <p className="text-slate-600 mb-8">
          Publicá tus cosechas y llegá directo a compradores en toda Nicaragua.
          Sin comisiones sobre ventas.
        </p>
        <a
          href="#crear-cuenta"
          className="inline-block px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors"
        >
          Registrate gratis →
        </a>
      </div>
    </section>
  )
}
