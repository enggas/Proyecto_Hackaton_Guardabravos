import { Link } from 'react-router-dom'

export const AuthShell = ({ children, panelTitle, panelDescription }) => {
  return (
    <div className="min-h-screen flex bg-cream">
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12">
        <div className="w-full max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-10">
            <img src="/logo.svg" alt="Pixca" className="h-7 w-auto" />
            <span className="text-xl font-semibold text-brand-700 tracking-wide">PIXCA</span>
          </Link>

          {children}
        </div>
      </div>

      <div className="hidden lg:flex flex-1 flex-col items-center justify-center bg-mint border-l border-line px-12">
        <div className="max-w-sm text-center">
          <div className="aspect-[4/3] bg-cream border border-line rounded-2xl flex items-center justify-center mb-8">
            <span className="text-sm text-muted">ilustración productos</span>
          </div>
          <h2 className="text-2xl font-bold text-ink mb-3">{panelTitle}</h2>
          <p className="text-body">{panelDescription}</p>
        </div>
      </div>
    </div>
  )
}
