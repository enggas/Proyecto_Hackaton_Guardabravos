import { ArrowRight } from 'lucide-react'

export const MobileHero = () => {
  return (
    <section className="px-4 py-5">
      <div className="aspect-video bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center mb-5">
        <span className="text-sm text-slate-400">banner productos</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 leading-tight mb-2">
        Del campo directo a tu mesa
      </h1>

      <p className="text-sm text-slate-600 mb-5">
        Productos frescos de productores nicaragüenses
      </p>

      <a
        href="#productos"
        className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors mb-3"
      >
        Explorar productos
        <ArrowRight className="w-4 h-4" />
      </a>

      <a
        href="#login"
        className="block text-center w-full py-3 border border-slate-300 text-slate-900 font-semibold rounded-lg mb-4"
      >
        Iniciar sesión
      </a>

      <p className="text-center text-sm text-slate-600">
        ¿Sos productor?{' '}
        <a href="#productor" className="font-semibold text-slate-900 underline">
          Registrate aquí
        </a>
      </p>
    </section>
  )
}
