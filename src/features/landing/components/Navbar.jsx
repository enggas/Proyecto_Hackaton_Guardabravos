import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Explorar', href: '#productos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Para productores', href: '#productor' },
  { label: 'Para transportistas', href: '/transportista' },
]

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <a href="/" className="flex items-start gap-2">
          <img src="/logo.svg" alt="Pixca" className="h-7 w-auto mt-0.5" />
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-semibold text-brand-700 tracking-wide">PIXCA</span>
            <span className="text-xs text-brand-600">Cultivando el futuro</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-body">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold text-ink hover:text-brand-700 transition-colors">
            Iniciar sesión
          </Link>
          <Link
            to="/registro"
            className="px-4 py-2 bg-brand-500 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Crear cuenta
          </Link>
        </div>
      </nav>
    </header>
  )
}
