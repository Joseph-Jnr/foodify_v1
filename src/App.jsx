import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import OrderSummary from './components/orderSummary/OrderSummary'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const location = useLocation()

  const showNavbarAndFooter = !(
    location.pathname === '/login' || location.pathname === '/register'
  )

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <main>
      {showNavbarAndFooter && <Navbar />}

      <ToastContainer hideProgressBar={true} />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/services' element={<Services />} />
        <Route path='/foods/:slug' element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/order-summary' element={<OrderSummary />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </main>
  )
}

export default App
