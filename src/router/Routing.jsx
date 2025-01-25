import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wallet from '../Page/Wallet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../Page/Home'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wallet' element={<Wallet/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routing