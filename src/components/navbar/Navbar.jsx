import React, { useState, useEffect } from 'react'
import { MdShoppingBasket, MdLightMode } from 'react-icons/md'
import { CiDark, CiLogin } from 'react-icons/ci'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import Button from '../UI/button/Button'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [dark, setDark] = useState(
    () => localStorage.getItem('isDark') === 'true'
  )
  const [rotateIcon, setRotateIcon] = useState(false)

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav)
    setRotateIcon(!rotateIcon)
  }

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
    const handleColorSchemeChange = () => {
      setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }

    handleColorSchemeChange() // set initial value

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleColorSchemeChange)

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleColorSchemeChange)
    }
  }, [])

  return (
    <nav className={`navbarComponent ${isSticky ? 'sticky' : ''}`}>
      <div className='container flex items-center justify-between'>
        <div className='navbar-brand flex items-center'>
          Foodify{' '}
          <span
            className={`ml-2 ${showMobileNav ? 'rotate' : ''}`}
            onClick={toggleMobileNav}
          >
            <RiArrowDownSLine size={20} />
          </span>
        </div>
        <div className={showMobileNav ? 'nav-links-mobile' : 'nav-links'}>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/menu' activeClassName='active'>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' activeClassName='active'>
                Services
              </NavLink>
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
            <Link to='/login'>
              <Button
                icon={<CiLogin />}
                btnClass={'main-btn flex items-center'}
                iconClass={'mr-2'}
                text={'Login'}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
