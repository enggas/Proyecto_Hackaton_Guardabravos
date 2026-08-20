import { useState } from 'react'
import { resetPasswordForEmail } from '../services/authService'

const traducirError = (message) => {
  if (message?.includes('Unable to validate email address')) {
    return 'El correo electrónico no es válido'
  }
  return message || 'Ocurrió un error al enviar el correo'
}

export const useForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await resetPasswordForEmail(email)
      setSent(true)
    } catch (err) {
      setError(traducirError(err.message))
    } finally {
      setLoading(false)
    }
  }

  return { email, setEmail, loading, error, sent, handleSubmit }
}
