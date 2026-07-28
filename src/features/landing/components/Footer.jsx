import { Globe, Mail, MessageCircle } from 'lucide-react'

const SOCIAL_LINKS = [
  { label: 'Sitio web', icono: Globe, href: '#' },
  { label: 'Correo', icono: Mail, href: '#' },
  { label: 'WhatsApp', icono: MessageCircle, href: '#' },
]

const FOOTER_LINKS = [
  { label: 'Términos', href: '#' },
  { label: 'Privacidad', href: '#' },
  { label: 'Contacto', href: '#' },
]

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <p>© 2026 pixca · Hecho en Nicaragua 🇳🇮</p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, icono: Icono, href }) => (
            <a key={label} href={href} aria-label={label} className="hover:text-slate-800 transition-colors">
              <Icono className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-slate-800 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
