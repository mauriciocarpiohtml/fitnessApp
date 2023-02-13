import React from 'react'

function YoutubeCard({video}) {
  console.log(video)
  const {
    title,
    id, 
  } = video
  return (
     <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank">
        <div className='flex flex-col mx-auto cursor-pointer shadow-lg mt-3 p-3 transition duration-500 ease-in-out transform hover:scale-110'>
          <img src={video?.bestThumbnail?.url || video?.thumbnails.url} alt={title} />
          <h3 className='text-stone-600 mt-3 uppercase text-lg font-bold text-center'>{title}</h3>
        </div>
     </a>
  )
}

export default YoutubeCard
