const NAV_LINKS = [
  { label: 'Explorar', href: '#productos' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Para productores', href: '#productor' },
  { label: 'Para transportistas', href: '/transportista' },
]

export const Navbar = () => {
  return (
    <header className="border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <span className="text-xl font-bold text-slate-900 tracking-wide">pixca</span>

        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-slate-900 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Iniciar sesión
          </a>
          <a
            href="#crear-cuenta"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-md transition-colors"
          >
            Crear cuenta
          </a>
        </div>
      </nav>
    </header>
  )
}
