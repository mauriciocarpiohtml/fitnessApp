import { useState } from 'react'
import Inicio from './pages/Inicio'
import Rutina from './pages/Rutina'
import CrearRutina from './components/CrearRutina'


function App() {

  
  return (
    <>
       <Inicio/>
       <Rutina/>
       <CrearRutina/>
    </>
  )
}

export default App
