import React from 'react'
import Youtube from './Youtube'
import { useState, useContext } from 'react'
import ContextEjercicios from '../context/EjerciciosProvider'

function ModalEjercicio() {
    
    const {seleccionarSerie, setModal, ejercicioModal} = useContext(ContextEjercicios)

    const {bodyPart, equipment, gifUrl, name, target} = ejercicioModal
    const [dia, setDia] = useState('')

  return (
    <div className='w-3/4 mx-auto fixed top-20 left-0 right-0 bottom-0  z-10 opacity-87 bg-gray-100 overflow-scroll rounded-lg h-3/4 shadow-lg border-emerald-600 border-2'>
        <div className='p-5 md:p-10 md:flex justify-center items-center'>
            <img src={gifUrl} alt={name}/>
            <div className='flex flex-col '>
                <h3 className='text-stone-700 mt-5 md:mt-1 uppercase text-xl md:text-3xl font-bold text-center'>{name}</h3>
                <p className='mt-1 text-stone-400 text-center md:p-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quas! Ipsum praesentium, magnam perspiciatis blanditiis cupiditate dolor consequatur ducimus commodi.</p>

                <div className='mt-3 flex flex-col md:flex md:flex-row justify-center items-center w-full px-10 md:ml-5'>
                    <select
                        onChange={(e)=> setDia(e.target.value)}
                        className='p-3 rounded-lg cursor-pointer shadow-lg mt-1 w-full md:w-2/5 '>
                        <option value=''>Seleccione un día</option>
                        <option value='Lunes'>Lunes</option>
                        <option value='Martes'>Martes</option>
                        <option value='Miercoles'>Miercoles</option>
                        <option value='Jueves'>Jueves</option>
                        <option value='Viernes'>Viernes</option>
                    </select>

                    <button onClick={()=> seleccionarSerie(dia, bodyPart, equipment, gifUrl, name, target )}    
                    className='p-2 text-white font-bold w-full uppercase mb-2 cursor-pointer  md:w-1/2 rounded-lg mt-3 mx-auto bg-emerald-700 hover:bg-emerald-800 transition-all  ease-in'>
                   my routine</button>

                </div>
                <div className='flex justify-between'>
                    {/* // esto despues refactorizarlo a un array y un nuevo componente */}
                    <div className='p-5 flex flex-col gap-10 mt-5 mx-auto w-16 md:w-24 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="mx-auto" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                        </svg>
                        <p className='font-bold uppercase text-center mt-0 text-emerald-700'>{bodyPart}</p>
                    </div>

                    <div className='p-5 flex flex-col gap-10 mt-5 mx-auto w-16 md:w-24 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto" viewBox="0 0 16 16">
                            <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z"/>
                        </svg>
                        <p className='font-bold uppercase text-center mt-0 text-emerald-700'>{equipment}</p>
                    </div>

                    <div className='p-5 flex flex-col gap-10 mt-5 mx-auto w-16 md:w-24 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="mx-auto" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                        <p className='font-bold uppercase text-center mt-0 text-emerald-700'>{target}</p>
                    </div>

                </div>
            </div>
        
        </div>

        <svg
            onClick={ () => setModal(false)}
        xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-square-fill cursor-pointer absolute right-2 top-2 w-25 h-25 " viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg>
        <Youtube 
            ejercicioModal={ejercicioModal}/>
      
    </div>
  )
}

export default ModalEjercicio
