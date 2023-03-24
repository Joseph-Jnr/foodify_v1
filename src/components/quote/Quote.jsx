import React from 'react'
import quoteImg from '../../assets/quote-img-alt.jpg'
import './Quote.css'

const Quote = () => {
  return (
    <div className='container'>
      <div className='quote-wrap'>
        <div className='quote-img'>
          <img src={quoteImg} alt='chef' />
        </div>
        <div className='quote-txt'>
          <h2>Eat Healthy</h2>
          <i>
            "Good food is not only essential for nourishment but also for
            enjoyment. It has the power to bring people together, create
            memories, and evoke emotions. Good food is not just about taste but
            also about the quality and freshness of the ingredients, the skill
            of the cook, and the presentation of the dish. It can be simple or
            complex, traditional or experimental, but what matters is the care
            and attention that goes into its creation."
          </i>
        </div>
      </div>
    </div>
  )
}

export default Quote
