// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import { TransportistaHome } from '../features/transportista/pages/TransportistaHome'
import App from '../features/home/App'

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Definimos que cuando en el navegador escribas /pedidos-pendientes, cargue esa página */}
      <Route path="/" element={<TransportistaHome/>} />
      <Route path="/transportistahome" element={<TransportistaHome/>} />
    </Routes>
  )
}

export default App