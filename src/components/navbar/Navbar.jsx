import React, { useState, useEffect } from 'react'
import { MdShoppingBasket, MdLightMode } from 'react-icons/md'
import { CiDark, CiLogin } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

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

  return (
    <nav className={`navbarComponent ${isSticky ? 'sticky' : ''}`}>
      <div className='container flex items-center justify-between'>
        <div className='navbar-brand'>
          <a href='#'>
            Foodify <span>.</span>
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
          <div className='theme-switcher'>
            {/* Dark theme switcher */}
            <span>
              <CiDark />
            </span>
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
