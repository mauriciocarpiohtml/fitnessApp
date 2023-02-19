import { createContext, useState } from "react"

const ContextEjercicios = createContext()

function EjerciciosProvider({children}) {

    const [rutina, setRutina] = useState([])
    const [modal, setModal] = useState(false)
    const [ejercicioModal, setEjercicioModal] = useState({})
    const [mostrarBusqueda, setMostrarBusqueda] = useState(false)

    function seleccionarSerie(dia, bodyPart, equipment, gifUrl, name, target){
        const serie ={
            dia, bodyPart, equipment, gifUrl, name, target
        }
        
         setRutina([...rutina, serie])  
    }

    function activarModal(ejercicio){
      setEjercicioModal(ejercicio)
      setModal(true)
    }
  return (
    <ContextEjercicios.Provider 
      value={{rutina, seleccionarSerie, activarModal,setModal,modal, ejercicioModal, mostrarBusqueda, setMostrarBusqueda}}>
      {children}
    </ContextEjercicios.Provider>
  )
}

export default ContextEjercicios

export { EjerciciosProvider }



