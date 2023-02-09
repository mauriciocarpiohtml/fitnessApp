import React, { useEffect, useState } from 'react'
import { opcionesYoutube } from '../utils/fetch'
import YoutubeCard from './YoutubeCard'

function Youtube({ejercicioModal}) {
    const[videos, setVideos] = useState([])
    useEffect(()=>{
        async function consultarVideos(){
            const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${ejercicioModal.name}`
            const respuesta = await fetch(url, opcionesYoutube)
            const resultado = await respuesta.json()
            const topVideos = await resultado.items.slice(0,3)
            setVideos(topVideos)
        }

          consultarVideos() 
    },[])

  return (
    <>
      <h2 className='text-center text-xl md:text-3xl text-stone-600 mt-10 mb-5 uppercase'>Do you know the correct technique?</h2>
      <div className='mt-5 mb-10 border-t-2 border-emerald-700  p-5  grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20 w-full mx-auto '>
        
        {videos.map((video=>
              <YoutubeCard 
                video={video}
                key={video.id}/>
          ))}
      </div>
    </>
  )
}

export default Youtube
