import { Link } from 'react-router-dom'
import { Search, LogOut } from 'lucide-react'

export const TiendaTopBar = ({ busqueda, onBusquedaChange, onCerrarSesion }) => {
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.svg" alt="Pixca" className="h-7 w-auto" />
          <span className="text-xl font-semibold text-brand-700 tracking-wide">PIXCA</span>
        </Link>

        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="search"
            value={busqueda}
            onChange={(event) => onBusquedaChange(event.target.value)}
            placeholder="Buscar productos frescos..."
            className="w-full pl-10 pr-3 py-2 border border-line rounded-lg text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>

        <button
          type="button"
          onClick={onCerrarSesion}
          className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-body hover:text-ink transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>
      </div>
    </header>
  )
}
