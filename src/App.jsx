import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components/index'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import { Provider } from './context'
import Cart from './components/cart/Cart'

function App() {
  return (
    <main>
      <Provider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/services' element={<Services />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Provider>
    </main>
  )
}

export default App
