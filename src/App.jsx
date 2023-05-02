import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components/index'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Services from './pages/Services'
import LoginPage from './pages/LoginPage'
import Error404 from './pages/Error404'
import ProductDetail from './pages/ProductDetail'
import ScrollToTop from './components/ScrollToTop'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <main>
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/services' element={<Services />} />
        <Route path='/foods/:slug' element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
