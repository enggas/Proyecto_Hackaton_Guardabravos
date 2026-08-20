import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp, signInWithOAuth } from '../services/authService'

const traducirError = (message) => {
  if (message?.includes('User already registered')) {
    return 'Ya existe una cuenta con ese correo'
  }
  if (message?.includes('Password should be at least')) {
    return 'La contraseña debe tener al menos 6 caracteres'
  }
  if (message?.includes('Unable to validate email address')) {
    return 'El correo electrónico no es válido'
  }
  return message || 'Ocurrió un error al crear la cuenta'
}

export const useSignup = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [rol, setRol] = useState('comprador')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    setLoading(true)
    try {
      const data = await signUp({ email, password, fullName, rol })
      if (data.session) {
        navigate('/')
      } else {
        setSuccess(true)
      }
    } catch (err) {
      setError(traducirError(err.message))
    } finally {
      setLoading(false)
    }
  }

  const handleOAuth = async (provider) => {
    setError(null)
    try {
      await signInWithOAuth(provider)
    } catch (err) {
      setError(traducirError(err.message))
    }
  }

  return {
    fullName,
    setFullName,
    rol,
    setRol,
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
  }
}
