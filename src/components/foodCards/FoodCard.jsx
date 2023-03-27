import React from 'react'
import './FoodCard.css'
import FoodCardItem from './FoodCardItem'
import { foodList } from './data'

const FoodCard = () => {
  return (
    <section className='food-card-section section-padding' id='foodlist'>
      <div className='food-card-section-wrap container'>
        <div className='section-header-alt'>
          <h2>What do we offer you?</h2>
          <div className='text-underline'></div>
        </div>

        <div className='main-food-container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {foodList.map((food, index) => (
            <FoodCardItem
              key={index}
              image={food.image}
              title={food.title}
              category={food.category}
              price={food.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCard
