import { ArrowRight } from 'lucide-react'

export const MobileHero = () => {
  return (
    <section className="px-4 py-5 bg-cream">
      <div className="aspect-video bg-mint border border-line rounded-2xl flex items-center justify-center mb-5">
        <span className="text-sm text-muted">banner productos</span>
      </div>

      <h1 className="text-3xl font-bold text-ink leading-tight tracking-tight mb-2">
        Del campo directo a tu mesa
      </h1>

      <p className="text-sm text-body mb-5">
        Productos frescos de productores nicaragüenses
      </p>

      <a
        href="#productos"
        className="flex items-center justify-center gap-2 w-full py-3 bg-brand-500 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors mb-3"
      >
        Explorar productos
        <ArrowRight className="w-4 h-4" />
      </a>

      <a
        href="#login"
        className="block text-center w-full py-3 border border-line text-ink font-semibold rounded-lg mb-4"
      >
        Iniciar sesión
      </a>

      <p className="text-center text-sm text-body">
        ¿Sos productor?{' '}
        <a href="#productor" className="font-semibold text-brand-700 underline">
          Registrate aquí
        </a>
      </p>
    </section>
  )
}
