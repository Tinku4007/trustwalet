import { useState } from 'react'
import './App.css'
import Routing from './router/Routing'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    
     <Routing/>
     <Toaster/>
    </>
  )
}

export default App
