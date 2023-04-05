import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components/index'
import Home from './pages/Home'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
