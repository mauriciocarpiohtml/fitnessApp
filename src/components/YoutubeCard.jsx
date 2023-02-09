import React from 'react'

function YoutubeCard({video}) {
    
    const {title, url} = video
    const {url: foto} = video.bestThumbnail
  return (
    <a href={url }>
        <div className='flex flex-col mx-auto cursor-pointer shadow-lg mt-3 p-3 transition duration-500 ease-in-out transform hover:scale-110'>
        <img src={foto } alt={title} />
        <h3 className='text-stone-600 mt-3 uppercase text-lg font-bold text-center'>{title || ''}</h3>
        
      
    </div>
    </a>
    
  )
}

export default YoutubeCard
