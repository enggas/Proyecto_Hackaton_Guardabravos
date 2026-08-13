const PASOS = [
  { numero: 1, titulo: 'Explora' },
  { numero: 2, titulo: 'Contacta' },
  { numero: 3, titulo: 'Recibe' },
]

export const MobileHowItWorks = () => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-bold text-ink text-center mb-5">¿Cómo funciona?</h2>

      <div className="flex justify-around">
        {PASOS.map((paso) => (
          <div key={paso.numero} className="flex flex-col items-center gap-2">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white font-semibold">
              {paso.numero}
            </span>
            <span className="text-sm text-body">{paso.titulo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
