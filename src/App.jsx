import { useEffect, useState } from 'react'
import { supabase } from './config/supabaseClient'

function App() {
  const [estadoConexion, setEstadoConexion] = useState('conectando')
  const [mensajeError, setMensajeError] = useState(null)

  useEffect(() => {
    probarConexion()
  }, [])

  const probarConexion = async () => {
    try {
      setEstadoConexion('conectando')
      setMensajeError(null)

      const { data, error } = await supabase.auth.getSession()

      if (error) throw error

      setEstadoConexion('exito')
    } catch (err) {
      console.error('Error al conectar con Supabase:', err)
      setEstadoConexion('error')
      setMensajeError(err.message)
    }
  }

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.tarjeta}>
        <h1>Estado de la Conexión</h1>

        {estadoConexion === 'conectando' && (
          <p style={estilos.cargando}>Verificando conexión con Supabase...</p>
        )}

        {estadoConexion === 'exito' && (
          <div style={estilos.alertaExito}>
            <h2>¡Conexión realizada con éxito!</h2>
            <p>Tu app de React ya está comunicándose correctamente con Supabase.</p>
          </div>
        )}

        {estadoConexion === 'error' && (
          <div style={estilos.alertaError}>
            <h2>Falló la conexión</h2>
            <p><strong>Detalle del error:</strong> {mensajeError}</p>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
              Revisa que las variables en tu archivo <code>.env.local</code> sean correctas y que hayas reanudado el servidor de Vite con <code>npm run dev</code>.
            </p>
          </div>
        )}

        <button onClick={probarConexion} style={estilos.boton}>
          Reintentar conexión
        </button>
      </div>
    </div>
  )
}

const estilos = {
  contenedor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: '#ffffff',
    fontFamily: 'sans-serif'
  },
  tarjeta: {
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#1e1e1e',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    maxWidth: '450px'
  },
  cargando: {
    color: '#f39c12',
    fontSize: '1.1rem'
  },
  alertaExito: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#1b4332',
    color: '#2ec4b6',
    border: '1px solid #2ec4b6',
    margin: '20px 0'
  },
  alertaError: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#4a0e17',
    color: '#ff4d6d',
    border: '1px solid #ff4d6d',
    margin: '20px 0'
  },
  boton: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3a86ff',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px'
  }
}

export default App