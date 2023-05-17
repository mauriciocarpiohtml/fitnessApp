
import EjercicioCard from './EjercicioCard'


function EjerciciosLista({ejerciciosPorPagina}) {


   return (
  <>
    {ejerciciosPorPagina?.length > 0 ? (
      <div className='mt-5 p-5 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 w-full md:w-3/4 mx-auto'>
        {ejerciciosPorPagina.map((ejercicio) => (
          <EjercicioCard ejercicio={ejercicio} 
                          key={ejercicio.id} />
        ))}
      </div>
    ) : (
      <div className='w-full text-center p-3 text-stone-500'>Search for a muscle group for example <span className='font-bold'> biceps or back,</span> the exercises will appear here.</div>
    )}
  </>
     
     
   )
 }

export default EjerciciosLista
