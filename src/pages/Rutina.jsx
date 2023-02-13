import React from 'react'
import { useContext, useState, useEffect } from 'react'
import ContextEjercicios from '../context/EjerciciosProvider'
import NavegacionDias from '../componentsRutina/NavegacionDias'
import ListaAgregados from '../componentsRutina/ListaAgregados'

function Rutina() {
  // activar modal con useContext y luego pasarlo aca

  const {rutina} = useContext(ContextEjercicios)
  const [diaSeleccionado, setDiaSeleccionado] = useState('Lunes')
  const [rutinaFiltrada, setRutinaFiltrada] = useState([])

  useEffect(()=>{
    function filtrarRutina(){
      const filtrar = rutina.filter((ejercicio) =>(
        ejercicio.dia === diaSeleccionado
      ))
      setRutinaFiltrada(filtrar)
    }
    filtrarRutina()
  },[diaSeleccionado, rutina])

  
  return (
    <div className='flex flex-col mt-10 mb-10'>
      {rutina.length && <>
                        <NavegacionDias
                        diaSeleccionado={diaSeleccionado} 
                        setDiaSeleccionado={setDiaSeleccionado}/>
                        <ListaAgregados
                        ejerciciosPorPagina={rutinaFiltrada} /> 
                        </> }
      
    </div>
  )
}

export default Rutina
