// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import { TransportistaHome } from '../features/transportista/pages/TransportistaHome'
import { LandingPage } from '../features/landing/pages/LandingPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/transportista" element={<TransportistaHome/>} />
    </Routes>
  )
}