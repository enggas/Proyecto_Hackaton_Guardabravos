import { Eye, EyeOff } from 'lucide-react'

export const PasswordToggle = ({ visible, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-body"
  >
    {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
  </button>
)
