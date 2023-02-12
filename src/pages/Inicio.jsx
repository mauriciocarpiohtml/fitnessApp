import { useState, useContext} from 'react'
import Hero from '../components/Hero'
import BuscarEjercicios from '../components/BuscarEjercicios'
import EjerciciosLista from '../components/EjerciciosLista'
import Paginacion from '../components/Paginacion'
import ModalEjercicio from '../components/ModalEjercicio'
import ContextEjercicios from '../context/EjerciciosProvider'

// componente modal

function Inicio() {
    const {modal} = useContext(ContextEjercicios)

   const [ejercicios, setEjercicios] = useState([])
   const [paginaActual, setPaginaActual] = useState(1)
   // 9 por la cantidad de ejercicios que quiero que se muestren
   const mostrarEjercicios = 9
   const primerElemento = (paginaActual - 1) * mostrarEjercicios
   const ultimoElemento = primerElemento + mostrarEjercicios
   
    const ejerciciosPorPagina = ejercicios.slice(primerElemento, ultimoElemento)
   // state para el modal
   

   function cambiarPagina(pagina){
     setPaginaActual(pagina)
   }
  return (
    <>
      
      <Hero/>
      <BuscarEjercicios
        
        setEjercicios={setEjercicios}/>
      {ejerciciosPorPagina.length && <Paginacion 
                                      paginaActual={paginaActual}
                                      cambiarPagina={cambiarPagina}
                                      ejercicios={ejercicios}/> }
      <EjerciciosLista
        ejerciciosPorPagina={ejerciciosPorPagina}/>
      
      {modal && <ModalEjercicio/>}
    </>
  )
}

export default Inicio
