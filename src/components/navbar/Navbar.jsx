import React, { useState, useEffect } from 'react'
import { MdShoppingBasket, MdLightMode } from 'react-icons/md'
import { CiDark, CiLogin } from 'react-icons/ci'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [dark, setDark] = useState(
    () => localStorage.getItem('isDark') === 'true'
  )

  /*  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  } */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const isTop = scrollTop < 100
      setIsSticky(!isTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isDark', dark)
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const handleToggle = () => {
    setDark(!dark)
  }

  useEffect(() => {
    // detect user's system preference for dark or light mode
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDarkMode) {
      setDark(true)
    }
  }, [])

  return (
    <nav className={`navbarComponent ${isSticky ? 'sticky' : ''}`}>
      <div className='container flex items-center justify-between'>
        <div className='navbar-brand'>
          <a href='#' className='flex items-center'>
            Foodify{' '}
            <span className='ml-2'>
              <RiArrowDownSLine size={20} />
            </span>
          </a>
        </div>
        <div className='nav-links'>
          <ul>
            <li className='active'>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Menu</a>
            </li>
            <li>
              <a href=''>Services</a>
            </li>
            <li>
              <a href='' className='flex items-center'>
                Cart
                <span className='counter-wrap ml-1'>
                  <span className='cart-counter'>2</span>
                  <span className='cart-icon'>
                    <MdShoppingBasket />
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className='right-actions flex items-center'>
          <div className='theme-switcher' onClick={handleToggle}>
            {/* Dark theme switcher */}
            <span>{dark ? <MdLightMode /> : <CiDark />}</span>
          </div>
          <div className='login-btn'>
            <a href='' className='btn main-btn flex items-center'>
              <span className='mr-2'>
                <CiLogin />
              </span>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
