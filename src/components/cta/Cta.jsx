import React from 'react'
import './Cta.css'
import qrCode from '../../assets/qr.png'
import Button from '../UI/button/Button'

const Cta = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = '22990573130'
    const message = encodeURIComponent('Hi Foodify, I want to...')
    window.location.href = `https://wa.me/${phoneNumber}/?text=${message}`
  }

  return (
    <div className='section-padding cta-section'>
      <div className='container'>
        <div className='cta-section-wrap shadow-lg'>
          <div className='cta-img'></div>
          <div className='cta-right'>
            <div className='cta-text text-center'>
              <h1>Need something more specific?</h1>
              <p>
                Feel free to slide into our DMs. We are always ready to satisfy
                you.
              </p>
              <div className='qr-scan flex justify-center'>
                <img src={qrCode} alt='' />
              </div>
              <Button
                btnClass={'black-btn'}
                onClick={handleWhatsAppButtonClick}
                text={'Contact us'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
