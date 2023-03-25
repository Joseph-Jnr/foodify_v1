import React from 'react'
import './Cta.css'
import ctaImg from '../../assets/cta.jpg'
import qrCode from '../../assets/qr.png'

const Cta = () => {
  return (
    <div className='section-padding cta-section'>
      <div className='container'>
        <div className='cta-section-wrap flex items-center justify-between shadow-lg'>
          <div className='cta-img'>
            <img src={ctaImg} alt='' />
          </div>
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
              <a href='' className='btn black-btn'>
                Contact us
              </a>
            </div>
            {/* <div className='cta-action'>
              <a href='' className='btn black-btn'>
                Contact us
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
