import React from 'react'
import './Cta.css'

const Cta = () => {
  return (
    <div className='section-padding'>
      <div className='container'>
        <div className='cta-section-wrap flex items-center justify-between'>
          <div className='cta-text'>
            <h1>Need something more specific?</h1>
            <p>
              Feel free to slide into our DMs. We are always ready to satisfy
              you.
            </p>
          </div>
          <div className='cta-action'>
            <a href='' className='btn black-btn'>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
