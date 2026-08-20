import { Link } from 'react-router-dom'
import { Mail, MailCheck, ArrowLeft } from 'lucide-react'
import { useForgotPassword } from '../hooks/useForgotPassword'
import { AuthShell } from '../components/AuthShell'
import { AuthField } from '../components/AuthField'

export const ForgotPasswordPage = () => {
  const { email, setEmail, loading, error, sent, handleSubmit } = useForgotPassword()

  if (sent) {
    return (
      <AuthShell
        panelTitle="Te ayudamos a volver"
        panelDescription="Te enviamos un enlace para que puedas recuperar el acceso a tu cuenta en minutos."
      >
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-700 mb-5">
            <MailCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-ink mb-2">Revisá tu correo</h1>
          <p className="text-body mb-8">
            Si existe una cuenta con <span className="font-semibold text-ink">{email}</span>, te enviamos un
            enlace para restablecer tu contraseña.
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-ink hover:bg-strong text-white font-semibold rounded-lg transition-colors"
          >
            Volver a iniciar sesión
          </Link>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      panelTitle="Te ayudamos a volver"
      panelDescription="Te enviamos un enlace para que puedas recuperar el acceso a tu cuenta en minutos."
    >
      <Link to="/login" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4" />
        Volver a iniciar sesión
      </Link>

      <h1 className="text-3xl font-bold text-ink mb-2">¿Olvidaste tu contraseña?</h1>
      <p className="text-body mb-8">
        Ingresá tu correo electrónico y te enviaremos un enlace para restablecerla.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {error && (
          <p role="alert" className="text-sm text-sale bg-sale/10 border border-sale/30 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <AuthField
          id="email"
          label="Correo electrónico"
          icon={Mail}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@correo.com"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-ink hover:bg-strong text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Enviando…' : 'Enviar enlace de recuperación'}
        </button>
      </form>
    </AuthShell>
  )
}
