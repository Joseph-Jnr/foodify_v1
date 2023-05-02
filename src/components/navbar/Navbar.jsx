import React, { useState, useEffect, useContext } from 'react'
import { MdShoppingBasket, MdLightMode } from 'react-icons/md'
import { CiDark, CiLogin } from 'react-icons/ci'
import {
  RiArrowDownSLine,
  RiServiceLine,
  RiShoppingBasketFill,
} from 'react-icons/ri'
import { BiHomeAlt, BiFoodMenu } from 'react-icons/bi'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import Button from '../UI/button/Button'
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux'
import { BsBasket2Fill } from 'react-icons/bs'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [dark, setDark] = useState(
    () => localStorage.getItem('isDark') === 'true'
  )

  const [showCartModal, setShowCartModal] = useState(false)

  const [rotateIcon, setRotateIcon] = useState(false)

  // Cart items counter
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav)
    setRotateIcon(!rotateIcon)
  }

  const location = useLocation()
  const isHomePage = location.pathname === '/'

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

  const handleThemeToggle = () => {
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

  const hideMobileNav = () => {
    setShowMobileNav(false)
  }

  const showCart = () => {
    hideMobileNav()
    setShowCartModal(true)
  }

  const hideCart = () => {
    setShowCartModal(false)
  }

  return (
    <>
      <nav className={`navbarComponent ${isSticky ? 'sticky' : ''}`}>
        <div className='container flex items-center justify-between'>
          {window.innerWidth <= 765 ? (
            <div
              className='navbar-brand flex items-center'
              onClick={toggleMobileNav}
            >
              Foodify{' '}
              <span className={`ml-2 ${showMobileNav ? 'rotate' : ''}`}>
                <RiArrowDownSLine size={20} />
              </span>
            </div>
          ) : (
            <Link to='/' className='navbar-brand flex items-center'>
              Foodify
            </Link>
          )}

          <div className={showMobileNav ? 'nav-links-mobile' : 'nav-links'}>
            <ul>
              <li>
                <NavLink
                  exact='true'
                  to='/'
                  activeclassname='active'
                  onClick={hideMobileNav}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/menu'
                  activeclassname='active'
                  onClick={hideMobileNav}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  activeclassname='active'
                  onClick={hideMobileNav}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <div
                  className={`theme-switcher ${isHomePage ? 'white' : ''}`}
                  onClick={handleThemeToggle}
                >
                  {/* Theme switcher */}

                  {window.innerWidth <= 765 ? (
                    <span className='mobile-theme-switcher'>
                      {dark ? <MdLightMode /> : <CiDark />}{' '}
                      {dark ? <span>Light</span> : <span>Dark</span>}
                    </span>
                  ) : (
                    <span>{dark ? <MdLightMode /> : <CiDark />}</span>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div className='right-actions flex items-center'>
            <div
              className={`cart-icon flex items-center ${
                isHomePage ? 'white' : ''
              }`}
              onClick={showCart}
            >
              <span className='counter-wrap ml-1'>
                <span className='cart-counter'>{totalQuantity}</span>
                <span className='cart-icon'>
                  <BsBasket2Fill />
                </span>
              </span>
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

      {showCartModal && <Cart handleClose={hideCart} open={showCartModal} />}
    </>
  )
}

export default Navbar
