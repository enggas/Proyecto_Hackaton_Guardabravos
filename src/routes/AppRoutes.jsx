// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import { TransportistaHome } from '../features/transportista/pages/TransportistaHome'
import { LandingPage } from '../features/landing/pages/LandingPage'
import { LoginPage } from '../features/auth/pages/LoginPage'
import { SignupPage } from '../features/auth/pages/SignupPage'
import { ForgotPasswordPage } from '../features/auth/pages/ForgotPasswordPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/registro" element={<SignupPage/>} />
      <Route path="/recuperar" element={<ForgotPasswordPage/>} />
      <Route path="/transportista" element={<TransportistaHome/>} />
    </Routes>
  )
}