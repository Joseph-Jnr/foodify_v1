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
      <section className='section-padding'>
        <Quote />
      </section>
      <Cta />
      <Footer />
    </main>
  )
}

export default App
