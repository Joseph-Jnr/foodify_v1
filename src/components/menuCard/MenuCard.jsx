import React from 'react'
import './MenuCard.css'

const Menu = () => {
  return (
    <section class='section-padding menu' id='ourmenu'>
      <div className='section-header-alt mt-20'>
        <h2>Our Menu</h2>
        <div className='text-underline'></div>
      </div>

      <div class='container'>
        <div class='menu-card' data-aos='flip-down'>
          <div class='card-left'>
            <div class='single-item'>
              <div class='item-top'>
                <h2>Spaghetti</h2>
                <div class='dotted-line'></div>
                <span>XOF 5,000</span>
              </div>
              <div class='item-meta'>
                <p>Egg, sausage, white and jellof...</p>
              </div>
            </div>
            <div class='single-item'>
              <div class='item-top'>
                <h2>Jellof Rice</h2>
                <div class='dotted-line'></div>
                <span>XOF 1,500</span>
              </div>
              <div class='item-meta'>
                <p>Chicken, salad, beans...</p>
              </div>
            </div>
            <div class='single-item'>
              <div class='item-top'>
                <h2>Fried Rice</h2>
                <div class='dotted-line'></div>
                <span>XOF 2,500</span>
              </div>
              <div class='item-meta'>
                <p>Chicken, salad, beans...</p>
              </div>
            </div>
          </div>
          <div class='card-center'>
            <div class='circle'></div>
            <div class='line'></div>
            <div class='circle'></div>
          </div>
          <div class='card-right'>
            <div class='single-item'>
              <div class='item-top'>
                <h2>Fufu</h2>
                <div class='dotted-line'></div>
                <span>XOF 1,000</span>
              </div>
              <div class='item-meta'>
                <p>Egusi, oha, okro, beef, goat meat...</p>
              </div>
            </div>
            <div class='single-item'>
              <div class='item-top'>
                <h2>Semo</h2>
                <div class='dotted-line'></div>
                <span>XOF 1,000</span>
              </div>
              <div class='item-meta'>
                <p>Egusi, oha, okro, beef, goat meat...</p>
              </div>
            </div>
            <div class='single-item'>
              <div class='item-top'>
                <h2>Amala</h2>
                <div class='dotted-line'></div>
                <span>XOF 500</span>
              </div>
              <div class='item-meta'>
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
