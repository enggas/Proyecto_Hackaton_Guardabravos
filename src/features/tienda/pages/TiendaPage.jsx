import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLotes } from '../hooks/useLotes'
import { normalizarLote, CATEGORIA_LABELS } from '../utils/normalizarLote'
import { ProductoCard } from '../components/ProductoCard'
import { TiendaTopBar } from '../components/TiendaTopBar'
import { signOut } from '../../auth/services/authService'

const CATEGORIAS = [{ value: null, label: 'Todos' }, ...Object.entries(CATEGORIA_LABELS).map(([value, label]) => ({ value, label }))]

export const TiendaPage = () => {
  const navigate = useNavigate()
  const { data: lotes, isLoading, error } = useLotes()
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState(null)

  const lotesFiltrados = useMemo(() => {
    if (!lotes) return []
    const busquedaNormalizada = busqueda.trim().toLowerCase()

    return lotes.filter((lote) => {
      const producto = normalizarLote(lote)
      const coincideCategoria = !categoria || producto.categoria === categoria
      const coincideBusqueda = !busquedaNormalizada || producto.nombre.toLowerCase().includes(busquedaNormalizada)
      return coincideCategoria && coincideBusqueda
    })
  }, [lotes, busqueda, categoria])

  const handleCerrarSesion = async () => {
    await signOut()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-cream">
      <TiendaTopBar busqueda={busqueda} onBusquedaChange={setBusqueda} onCerrarSesion={handleCerrarSesion} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-ink mb-1">Catálogo</h1>
        <p className="text-sm text-muted mb-6">Productos frescos directo del productor</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIAS.map((opcion) => (
            <button
              key={opcion.label}
              type="button"
              onClick={() => setCategoria(opcion.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                categoria === opcion.value
                  ? 'bg-brand-500 border-brand-500 text-white'
                  : 'border-line text-body hover:bg-mint'
              }`}
            >
              {opcion.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="py-16 text-center text-muted">Cargando productos…</div>
        )}

        {error && (
          <div className="p-4 bg-sale/10 text-sale rounded-lg border border-sale/30">
            No se pudieron cargar los productos: {error.message}
          </div>
        )}

        {!isLoading && !error && lotesFiltrados.length === 0 && (
          <div className="py-16 text-center text-muted bg-white rounded-2xl border border-line">
            No encontramos productos con esos filtros.
          </div>
        )}

        {!isLoading && !error && lotesFiltrados.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lotesFiltrados.map((lote) => (
              <ProductoCard key={lote.id} lote={lote} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
