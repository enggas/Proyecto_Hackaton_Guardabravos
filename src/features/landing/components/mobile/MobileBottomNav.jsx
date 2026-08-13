import { Home, Search, Heart, User } from 'lucide-react'

const TABS = [
  { label: 'Inicio', icono: Home, activo: true },
  { label: 'Buscar', icono: Search },
  { label: 'Favoritos', icono: Heart },
  { label: 'Perfil', icono: User },
]

export const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-line flex md:hidden">
      {TABS.map(({ label, icono: Icono, activo }) => (
        <a
          key={label}
          href="#"
          className={`flex-1 flex flex-col items-center gap-1 py-2.5 text-xs font-medium ${
            activo ? 'text-brand-700' : 'text-muted'
          }`}
        >
          <Icono className="w-5 h-5" />
          {label}
        </a>
      ))}
    </nav>
  )
}
