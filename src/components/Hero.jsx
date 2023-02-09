import hero from '../imagenes/hero1.jpg'

function Hero() {
  return (
    <div className='flex ' style={{height:'75vh'}}>
        <div className='flex flex-col justify-center items-center  w-3/5 p-8 md:p-0'>
            <p className='font-black text-emerald-500 text-left tracking-wide text-base mr-32 md:mr-48'>FitnessApp</p>
            <h2 className='text-2xl font-bold text-stone-700 uppercase text-left '>create your <br/> personalized  routine </h2>
            <button className='p-2  text-white font-bold uppercase cursor-pointer w-full md:w-1/3 rounded-lg mt-3 ml:auto md:mx-auto bg-emerald-500 hover:bg-emerald-700 transition duration-500 ease-in-out transform hover:scale-110'>Register</button>
        </div>
        <div className='w-2/5 '>
          <img src={hero} alt="hero" className='h-full object-cover ' />
        </div>
        
    </div>
  )
}

export default Hero
