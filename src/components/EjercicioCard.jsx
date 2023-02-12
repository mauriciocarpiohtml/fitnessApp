import { useContext } from "react"
import ContextEjercicios from "../context/EjerciciosProvider"

function EjercicioCard({ejercicio}) {
    const {bodyPart,equipment, gifUrl, name} = ejercicio
    const {activarModal} = useContext(ContextEjercicios)
    
  return (
    <div className='p-3 flex flex-col border-t-2 border-emerald-700  shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-110'
          onClick={()=> activarModal(ejercicio)}>
      <img src={gifUrl} alt={name} />

      <p className='uppercase text-stone-600 text-center mt-1'>{name}</p>
        <div className='flex flex-col md:flex md:flex-row gap-5 mx-auto mt-3 mb-5'>
            <button className='p-2 bg-emerald-600 text-white rounded-full mb-3 md:mb-0 md:mr-3'>
                {bodyPart}
            </button>

            <button className='p-2 bg-yellow-500 text-white rounded-full'>
                {equipment}
            </button>
        </div>
    </div>
  )
}

export default EjercicioCard
