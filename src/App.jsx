import React, { useState } from 'react'
import './App.css'
import { Header, Navbar, Quote, Cta, Footer } from './components/index'

function App() {
  return (
    <main>
      <header>
        <Navbar />
        <Header />
      </header>
      <Quote />
      <Cta />
      <Footer />
    </main>
  )
}

export default App
