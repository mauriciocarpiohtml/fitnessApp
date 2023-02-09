import EjercicioCard from '../components/EjercicioCard'


function ListaAgregados({ejerciciosPorPagina}) {

   return (
     <div className='mt-5 p-5 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 w-full md:w-3/4 mx-auto'>

         {ejerciciosPorPagina.map((ejercicio) => (
           <EjercicioCard 
             ejercicio={ejercicio}
             key={ejercicio.id}/>
         ))}
     </div>
   )
 }

export default ListaAgregados