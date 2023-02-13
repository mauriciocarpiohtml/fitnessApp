import hero from '../imagenes/hero1.jpg'

function Hero() {
  // style={{height:'75vh'}}
  return (
    <div className='flex flex-col md:flex-row relative h-[75vh] bg-[#FAFAF9]' >
        <div className='flex flex-col justify-center items-center  w-3/5 p-8 md:p-0 z-10 absolute top-10 md:top-[30%]'>
            <p className='font-black text-emerald-500 text-left tracking-wide text-base mr-24 md:mr-48'>FitnessApp</p>
            <h2 className='text-2xl font-bold text-stone-700 uppercase text-left '>create your <br/> personalized  routine </h2>
            <button className='p-2  text-white font-bold uppercase cursor-pointer w-full md:w-1/3 rounded-lg mt-3 ml:auto md:mx-auto bg-emerald-500 hover:bg-emerald-700 transition duration-500 ease-in-out transform hover:scale-110' 
            > Register now</button>
        </div>
        <div className='w-[60%] md:w-[40%] absolute left-[45%] md:left-[50%] h-full'>
          <img src={hero} alt="hero" className='h-full object-cover ' />
        </div>
        
    </div>
  )
}

export default Hero
