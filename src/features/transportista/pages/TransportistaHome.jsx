import React from 'react'
import { usePedidosEntrega } from '../hooks/usePedidosEntrega'

export const TransportistaHome = () => {
  const { data: pedidos, isLoading, error } = usePedidosEntrega()

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-slate-200/80 p-6 border-r border-slate-300 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-emerald-800 mb-4 tracking-wide">PIXCA</h2>
        
        <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors text-left">
          Editar Usuario
        </button>
        
        <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-colors text-left">
          Historial Traslados
        </button>
        
        <button className="w-full py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg shadow-md text-left">
          Pedidos Pendientes
        </button>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-8">
        {/* Barra Superior / Header */}
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-emerald-700 transition-colors">¿Cómo Hacer Mi Primer Traslado?</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Funcionamiento General</a>
          </div>
          <button className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-md shadow transition-colors">
            Cerrar Sesión
          </button>
        </header>

        {/* Listado de Pedidos */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">Pedidos Pendientes de Traslado</h1>

          {isLoading && (
            <div className="p-8 text-center text-slate-500">Cargando pedidos disponibles...</div>
          )}

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
              Error al obtener los datos: {error.message}
            </div>
          )}

          {pedidos?.length === 0 && (
            <div className="p-8 text-center text-slate-500 bg-white rounded-xl shadow-sm border">
              No hay pedidos pendientes en este momento.
            </div>
          )}

          {pedidos?.map((pedido) => {
            const fechaFormateada = new Date(pedido.creado_en).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })
            const nombreProductor = pedido.ordenes?.perfiles?.nombre_completo || 'Productor no asignado'

            return (
              <div 
                key={pedido.id} 
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Imagen / Placeholder del Productor o Producto */}
                <div className="w-full md:w-48 bg-slate-800 text-white flex flex-col items-center justify-center p-4 relative min-h-[120px]">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-2">
                    <User className="w-6 h-6 text-slate-300" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 text-center">
                    {nombreProductor}
                  </span>
                </div>

                {/* Info del Pedido */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-slate-700">Fecha:</span> {fechaFormateada}
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-slate-700">Dirección:</strong> {pedido.destino_direccion || 'Sin dirección registrada'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Acción */}
                <div className="p-5 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 flex items-center justify-center">
                  <button className="w-full md:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2">
                    Ver Detalles
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </div>
  )
}