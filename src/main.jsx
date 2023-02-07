import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//  import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//  import Inicio from './pages/Inicio'
//  import Rutina from './pages/Rutina'
import App from './App'
 import { EjerciciosProvider } from './context/EjerciciosProvider'
//  const router = createBrowserRouter([
//    {
//      path: '/',
//      element: <Inicio/>
//    },
//    {
//      path:'rutina',
//      element: <Rutina/>
//    }
//  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <EjerciciosProvider>
        <App/>
      </EjerciciosProvider>
     
     
  </React.StrictMode>,
)
