import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navs from './Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Cart from './Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart />} />

      </Routes>

    </>
  )
}

export default App
