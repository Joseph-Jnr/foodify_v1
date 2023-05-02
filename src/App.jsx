import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components/index'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/services' element={<Services />} />
        <Route path='/foods/:slug' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
