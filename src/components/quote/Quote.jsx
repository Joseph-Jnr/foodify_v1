import React from 'react'
import quoteImg from '../../assets/quote-img-alt.jpg'
import './Quote.css'

const Quote = () => {
  return (
    <section className='section-padding quote-section'>
      <div className='container'>
        <div className='quote-wrap'>
          <div className='quote-img'>
            <img src={quoteImg} alt='chef' />
          </div>
          <div className='quote-txt'>
            <div className='section-header'>
              <h2>Eat Healthy</h2>
              <div className='text-underline'></div>
            </div>
            <i>
              "Good food is not only essential for nourishment but also for
              enjoyment. It has the power to bring people together, create
              memories, and evoke emotions."
            </i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote
