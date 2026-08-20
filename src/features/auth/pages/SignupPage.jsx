import { Link } from 'react-router-dom'
import { Mail, Lock, User, MailCheck } from 'lucide-react'
import { useSignup } from '../hooks/useSignup'
import { AuthShell } from '../components/AuthShell'
import { AuthField } from '../components/AuthField'
import { PasswordToggle } from '../components/PasswordToggle'
import { GoogleIcon, FacebookIcon } from '../components/SocialIcons'

export const SignupPage = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    acceptTerms,
    setAcceptTerms,
    loading,
    error,
    success,
    handleSubmit,
    handleOAuth,
  } = useSignup()

  if (success) {
    return (
      <AuthShell
        panelTitle="Sumate a la cosecha"
        panelDescription="Creá tu cuenta y accedé a productos frescos directo del productor, sin intermediarios."
      >
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand-700 mb-5">
            <MailCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-ink mb-2">Revisá tu correo</h1>
          <p className="text-body mb-8">
            Te enviamos un enlace de confirmación a <span className="font-semibold text-ink">{email}</span>.
            Confirmalo para activar tu cuenta.
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
      panelTitle="Sumate a la cosecha"
      panelDescription="Creá tu cuenta y accedé a productos frescos directo del productor, sin intermediarios."
    >
      <h1 className="text-3xl font-bold text-ink mb-2">Creá tu cuenta</h1>
      <p className="text-body mb-8">Empezá a comprar o vender en minutos</p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {error && (
          <p role="alert" className="text-sm text-sale bg-sale/10 border border-sale/30 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <AuthField
          id="fullName"
          label="Nombre completo"
          icon={User}
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Tu nombre y apellido"
          autoComplete="name"
        />

        <AuthField
          id="email"
          label="Correo electrónico"
          icon={Mail}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@correo.com"
        />

        <AuthField
          id="password"
          label="Contraseña"
          icon={Lock}
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          minLength={6}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Mínimo 6 caracteres"
          rightAdornment={<PasswordToggle visible={showPassword} onToggle={() => setShowPassword((value) => !value)} />}
        />

        <AuthField
          id="confirmPassword"
          label="Confirmar contraseña"
          icon={Lock}
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          minLength={6}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Repetí tu contraseña"
        />

        <label className="flex items-start gap-2 text-sm text-body cursor-pointer">
          <input
            type="checkbox"
            required
            checked={acceptTerms}
            onChange={(event) => setAcceptTerms(event.target.checked)}
            className="w-4 h-4 mt-0.5 rounded border-line text-brand-500 focus:ring-brand-500"
          />
          Acepto los términos y condiciones y la política de privacidad
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-ink hover:bg-strong text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Creando cuenta…' : 'Crear cuenta'}
        </button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <span className="flex-1 h-px bg-line" />
        <span className="text-sm text-muted">o continuar con</span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleOAuth('google')}
          className="flex items-center justify-center gap-2 py-2.5 border border-line rounded-lg text-sm font-medium text-ink hover:bg-mint transition-colors"
        >
          <GoogleIcon />
          Google
        </button>
        <button
          type="button"
          onClick={() => handleOAuth('facebook')}
          className="flex items-center justify-center gap-2 py-2.5 border border-line rounded-lg text-sm font-medium text-ink hover:bg-mint transition-colors"
        >
          <FacebookIcon />
          Facebook
        </button>
      </div>

      <p className="text-center text-sm text-body mt-8">
        ¿Ya tenés cuenta?{' '}
        <Link to="/login" className="font-semibold text-brand-700 underline">
          Iniciar sesión
        </Link>
      </p>
    </AuthShell>
  )
}
