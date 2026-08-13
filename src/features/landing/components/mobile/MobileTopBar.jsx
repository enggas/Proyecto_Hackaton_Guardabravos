import { Menu, ShoppingCart } from 'lucide-react'

export const MobileTopBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-cream border-b border-line">
      <button type="button" aria-label="Abrir menú" className="text-body">
        <Menu className="w-5 h-5" />
      </button>

      <a href="/" className="flex items-center gap-2">
        <img src="/logo.svg" alt="Pixca" className="h-6 w-auto" />
        <span className="text-lg font-semibold text-brand-700">PIXCA</span>
      </a>

      <button type="button" aria-label="Carrito" className="text-body">
        <ShoppingCart className="w-5 h-5" />
      </button>
    </header>
  )
}
