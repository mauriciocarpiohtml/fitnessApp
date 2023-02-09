import React from 'react'
import { useState } from 'react'
 import { opcionesEjercicios } from '../utils/fetch'

function BuscarEjercicios({setEjercicios}) {
  const [busqueda, setBusqueda] = useState('')
  
  async function buscarEjercicios(){
    const url = 'https://exercisedb.p.rapidapi.com/exercises'
    const respuesta = await fetch(url, opcionesEjercicios)
    const resultado = await respuesta.json()
    console.log(resultado)

    // traer solo los ejercicios que coincidan con esto
    const ejercicioBuscado= resultado.filter(
      (ejercicio) => ejercicio.name.toLowerCase().includes(busqueda) 
      || ejercicio.equipment.toLowerCase().includes(busqueda)
      || ejercicio.target.toLowerCase().includes(busqueda)
      || ejercicio.bodyPart.toLowerCase().includes(busqueda)
    )
    setBusqueda('')
    setEjercicios(ejercicioBuscado.slice(0, 100))
  }


  return (
    <div className='mx-auto p-3 mb-10 md:w-3/4 mt-5'>
      <h3 className='text-stone-600 text-center font-bold uppercase text-2xl md:text-3xl'>Find your new routine</h3>

      <div className=' flex justify-center items-center mt-5 '>
        <input 
          type="text"
         placeholder='Search for an exercise / muscle / equipment' 
         value={busqueda}
         onChange={e => setBusqueda(e.target.value)}
         className=' shadow-lg w-3/4 md:w-2/4 p-3 border border-slate-300 placeholder-slate-500  focus:outline-none focus:border-emerald-500 focus:ring-emerald-500' />
        <button
        onClick={buscarEjercicios} 
        className='bg-emerald-600 p-3  font-bold text-white shadow-lg'>Search</button>
      </div>
      
    </div>
  )
}

export default BuscarEjercicios
