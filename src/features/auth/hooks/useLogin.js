import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPassword, signInWithOAuth } from '../services/authService'

const traducirError = (message) => {
  if (message?.includes('Invalid login credentials')) {
    return 'Correo o contraseña incorrectos'
  }
  if (message?.includes('Email not confirmed')) {
    return 'Confirmá tu correo antes de iniciar sesión'
  }
  return message || 'Ocurrió un error al iniciar sesión'
}

export const useLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await signInWithPassword({ email, password })
      navigate('/')
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
  }
}
