import { Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { useLogin } from '../hooks/useLogin'
import { AuthShell } from '../components/AuthShell'
import { AuthField } from '../components/AuthField'
import { PasswordToggle } from '../components/PasswordToggle'
import { GoogleIcon, FacebookIcon } from '../components/SocialIcons'

export const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    remember,
    setRemember,
    loading,
    error,
    handleSubmit,
    handleOAuth,
  } = useLogin()

  return (
    <AuthShell
      panelTitle="Del campo a tu mesa"
      panelDescription="Conectate con productores nicaragüenses y accedé a productos frescos sin intermediarios."
    >
      <h1 className="text-3xl font-bold text-ink mb-2">Bienvenido de vuelta</h1>
      <p className="text-body mb-8">Ingresá a tu cuenta para continuar</p>

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

        <AuthField
          id="password"
          label="Contraseña"
          headerRight={
            <Link to="/recuperar" className="text-sm font-semibold text-brand-700 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          }
          icon={Lock}
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          rightAdornment={<PasswordToggle visible={showPassword} onToggle={() => setShowPassword((value) => !value)} />}
        />

        <label className="flex items-center gap-2 text-sm text-body cursor-pointer">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="w-4 h-4 rounded border-line text-brand-500 focus:ring-brand-500"
          />
          Mantener sesión iniciada
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-ink hover:bg-strong text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Ingresando…' : 'Iniciar Sesión'}
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
        ¿No tenés cuenta?{' '}
        <Link to="/registro" className="font-semibold text-brand-700 underline">
          Crear cuenta
        </Link>
      </p>
    </AuthShell>
  )
}
