import React from 'react'
import './MenuCard.css'

const Menu = () => {
  return (
    <section className='section-padding menu' id='ourmenu'>
      <div className='section-header-alt mt-20'>
        <h2>Our Menu</h2>
        <div className='text-underline'></div>
      </div>

      <div className='container'>
        <div className='menu-card' data-aos='flip-down'>
          <div className='card-left'>
            <div className='single-item'>
              <div className='item-top'>
                <h2>Spaghetti</h2>
                <div className='dotted-line'></div>
                <span>XOF 5,000</span>
              </div>
              <div className='item-meta'>
                <p>Egg, sausage, white and jellof...</p>
              </div>
            </div>
            <div className='single-item'>
              <div className='item-top'>
                <h2>Jellof Rice</h2>
                <div className='dotted-line'></div>
                <span>XOF 1,500</span>
              </div>
              <div className='item-meta'>
                <p>Chicken, salad, beans...</p>
              </div>
            </div>
            <div className='single-item'>
              <div className='item-top'>
                <h2>Fried Rice</h2>
                <div className='dotted-line'></div>
                <span>XOF 2,500</span>
              </div>
              <div className='item-meta'>
                <p>Chicken, salad, beans...</p>
              </div>
            </div>
          </div>
          <div className='card-center'>
            <div className='circle'></div>
            <div className='line'></div>
            <div className='circle'></div>
          </div>
          <div className='card-right'>
            <div className='single-item'>
              <div className='item-top'>
                <h2>Fufu</h2>
                <div className='dotted-line'></div>
                <span>XOF 1,000</span>
              </div>
              <div className='item-meta'>
                <p>Egusi, oha, okro, beef, goat meat...</p>
              </div>
            </div>
            <div className='single-item'>
              <div className='item-top'>
                <h2>Semo</h2>
                <div className='dotted-line'></div>
                <span>XOF 1,000</span>
              </div>
              <div className='item-meta'>
                <p>Egusi, oha, okro, beef, goat meat...</p>
              </div>
            </div>
            <div className='single-item'>
              <div className='item-top'>
                <h2>Amala</h2>
                <div className='dotted-line'></div>
                <span>XOF 500</span>
              </div>
              <div className='item-meta'>
                <p>Ewedu, fish, beef...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
