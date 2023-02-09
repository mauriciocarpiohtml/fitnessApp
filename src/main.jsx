import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
 import { EjerciciosProvider } from './context/EjerciciosProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <EjerciciosProvider>
        <App/>
      </EjerciciosProvider>
  </React.StrictMode>,
)
