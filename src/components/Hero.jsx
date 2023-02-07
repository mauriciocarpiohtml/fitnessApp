import '../app.css'
import hero from '../imagenes/hero1.jpg'

function Hero() {
  return (
    <div className='flex ' style={{height:'75vh'}}>
        <div className='flex flex-col justify-center items-center  w-3/5'>
            <p className='font-black text-yellow-600 text-left tracking-wide text-base mr-48'>FitnessApp</p>
            <h2 className='text-2xl font-bold text-stone-700 uppercase text-left '>create your <br/> personalized  routine </h2>
            <button className='p-2  text-white font-bold uppercase cursor-pointer w-1/3 rounded-lg mt-3 mx-auto bg-emerald-700 hover:bg-emerald-800 transition duration-500 ease-in-out transform hover:scale-110'>Registrarte</button>
        </div>
        <div className='w-2/5 '>
          <img src={hero} alt="hero" className='h-full object-cover ' />
        </div>
        
    </div>
  )
}

export default Hero
