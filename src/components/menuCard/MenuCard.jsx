import React from 'react'
import './MenuCard.css'
import MenuItem from './MenuItem'
import { foodList } from '../../api/foodData'

const MenuCard = () => {
  // display items randomly
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }
  shuffle(foodList)

  return (
    <section className='section-padding menu' id='ourmenu'>
      <div className='section-header-alt mt-20'>
        <h2>Our Menu</h2>
        <div className='text-underline'></div>
      </div>

      <div className='container flex justify-center'>
        <div className='menu-wrap'>
          {foodList.map((food, index) => (
            <MenuItem
              key={index}
              id={food.id}
              slug={food.slug}
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

export default MenuCard
