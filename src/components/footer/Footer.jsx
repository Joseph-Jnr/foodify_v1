import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import masterCard from '../../assets/icons/MasterCard.png'
import visa from '../../assets/icons/visa.png'
import momo from '../../assets/icons/momo.png'
import moov from '../../assets/icons/moov.png'

const Footer = () => {
  return (
    <footer className='footer-section section-padding'>
      <div className='container md:flex justify-between'>
        <div className='footer-logo'>
          <h1>Foodify</h1>
          <span>Global cuisine, delivered with ease</span>
        </div>
        <div className='footer-links'>
          <h2>Quick links</h2>
          <ul>
            <li>
              <Link to='/services'> Services</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/dishes'>African dishes</Link>
            </li>
            <li>
              <Link to='/dishes'>Vegetarian dishes</Link>
            </li>
          </ul>
        </div>
        <div className='footer-contact'>
          <h2>Contact</h2>
          <p>+22990998277, +2348033562718</p>
          <div className='payment-methods flex items-center justify-between'>
            <img src={momo} alt='mtn momo' />
            <img src={moov} alt='moov money' />
            <img src={visa} alt='visa' />
            <img src={masterCard} alt='mastercard' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
