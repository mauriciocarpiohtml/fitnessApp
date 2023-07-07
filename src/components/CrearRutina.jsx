import React from 'react'
import { useState } from 'react'

export default function CrearRutina() {

    const [dias, setDias] = useState(1)
    const [duracion, setDuracion] = useState(30)
    const [musculos, setMusculos] = useState('')
    const [rutinaIA, setRutinaIA] = useState()
    const[respuesta, setRespuesta] = useState(false)

    async function crearRutina(e){
        e.preventDefault()
        try {
            const response = await fetch('https://backend-fitness.vercel.app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt : `create a table with a training routine for ${dias}
                 days per week at the gym, lasting ${duracion}. The muscles I want to train during 
                 the week are: ${musculos}. Please indicate the number of sets and repetitions for each exercise and create
                 HTML line breaks after each day and each exercise. The day should be in bold.`})
            });
    
            const data = await response.json();
            setRutinaIA(data.bot)
            setRespuesta(true)
        } catch (error) {
            console.log(error);
        }

    }

    const html = rutinaIA
  return (
    <div className=' mx-auto p-3 mb-10 md:w-3/4 mt-5'>
      <h3 className='text-stone-600 text-center font-bold uppercase text-2xl md:text-3xl mb-5'>Create your routine</h3>
      <div className='w-full flex flex-col lg:flex-row justify-between gap-12'>
        <div className='lg:w-[50%] mx-auto p-3 rounded-lg border border-teal-300 shadow-lg'>
            <form className='p-5'>
                <div className='mt-1'>
                 <label
                 className='mt-1 text-stone-500 text-sm uppercase'
                 htmlFor="dias">training days</label>
                 <select
                  onChange={(e) => setDias(e.target.value)} 
                  className='w-full rounded-lg p-3 cursor-pointer mt-1'>
                    <option>1</option>
                    <option>3</option>
                    <option>5</option>
                </select>
                </div>

                <div className='mt-3'>
                 <label
                 className='mt-1 text-stone-500 text-sm uppercase' 
                 htmlFor="dias">Duration of trainning</label>
                 <select
                 onChange={(e) => setDuracion(e.target.value)} 
                 className='w-full rounded-lg p-3 cursor-pointer mt-1'>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>1 hour</option>
                </select>
                </div>

                <div className='mt-3 mb-3'>
                    <label
                    className='mt-1 text-stone-500 text-sm uppercase'
                    htmlFor="dias">muscles of the routine</label>
                    <textarea
                    onChange={(e) => setMusculos(e.target.value)}
                    className='w-full rounded-lg p-3  mt-2' 
                    placeholder='Biceps, triceps, glutes, back, shoulders'/> 
                </div>
                <button
                onClick={crearRutina}
                className='bg-teal-600 font-bold text-white uppercase p-3 w-full rounded-lg'>Create routine</button>
            </form>
        </div>
        {respuesta && (
            <div className=' w-full text-center lg:w-[50%] p-5 bg-gray-200 mx-auto shadow-lg border h-auto rounded-lg'>
                <div
                className='text-sm text-gray-500 mb-1 mt-3'
                dangerouslySetInnerHTML={{ __html: html }} />
                </div>
        )}
            </div>
    </div>
  )
}
