

function NavegacionDias({diaSeleccionado, setDiaSeleccionado}) {
    const diasSemana = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    
  return (
    
        <div className='flex gap-3 justify-center items-center mx-auto' id='buscador'>
          
            {diasSemana.map((dia=> 
            <div className={` ${diaSeleccionado === dia ? 'bg-emerald-600 border-white' : 'bg-white border-emerald-600' } shadow-xs h-10 w-full  rounded-xl border-2  cursor-pointer flex justify-center items-center transition duration-400 ease-in-out transform hover:scale-110 hover:bg-emerald-600`}
              onClick={() => setDiaSeleccionado(dia)}
              key={dia}>
                <h3 className={`font-bold p-1 md:p-3 text-center hover:text-white ${diaSeleccionado === dia ? 'text-white' : 'text-emerald-600'}`}>{dia}</h3>
            </div>
                ))}
            

        </div>
      
   
  )
}

export default NavegacionDias
