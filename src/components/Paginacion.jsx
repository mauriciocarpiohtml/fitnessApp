import React from 'react'

function Paginacion({paginaActual, cambiarPagina, ejercicios}) {
  return (
    <div className="mt-4 flex justify-between mx-auto p-3 mb-10 w-3/4">
        <button
          className="bg-emerald-600 text-white p-2 rounded-xl "
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Previous
        </button>
        <button
          className="bg-emerald-900 text-white p-2 rounded-xl "
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === Math.ceil(ejercicios.length / 9)}
        >
          Next
        </button>
      </div>
  )
}

export default Paginacion
