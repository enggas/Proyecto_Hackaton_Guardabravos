import { Menu, ShoppingCart } from 'lucide-react'

export const MobileTopBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
      <button type="button" aria-label="Abrir menú" className="text-slate-700">
        <Menu className="w-5 h-5" />
      </button>

      <span className="text-lg font-bold text-slate-900">pixca</span>

      <button type="button" aria-label="Carrito" className="text-slate-700">
        <ShoppingCart className="w-5 h-5" />
      </button>
    </header>
  )
}
