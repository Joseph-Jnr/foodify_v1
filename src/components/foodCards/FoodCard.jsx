import React, { useState, useEffect } from 'react'
import './FoodCard.css'
import FoodCardItem from './FoodCardItem'
import { foodList } from './data'
import {
  GiHamburger,
  GiFoodChain,
  GiBowlOfRice,
  GiNoodles,
  GiChickenLeg,
  GiPieSlice,
} from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import noItemImg from '../../assets/icons/out-of-stock.webp'

const FoodCard = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  // useMemo and useCallback for the filter bar

  const filteredFoodList =
    activeCategory === 'All'
      ? foodList
      : foodList.filter((food) => food.category === activeCategory)

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

  shuffle(filteredFoodList)

  return (
    <section className='food-card-section section-padding' id='foodlist'>
      <div className='food-card-section-wrap container'>
        <div className='section-header'>
          <h4>Choose from popular categories</h4>
        </div>
        <ul className='filter-bar flex justify-start align-middle mb-16'>
          <li
            className={`single-filter ${activeCategory === 'All' && 'active'}`}
            onClick={() => handleCategoryClick('All')}
          >
            <p>All</p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'Burger' && 'active'
            }`}
            onClick={() => handleCategoryClick('Burger')}
          >
            <p>
              <span className='mr-2'>
                <GiHamburger />
              </span>{' '}
              Burger
            </p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'African food' && 'active'
            }`}
            onClick={() => handleCategoryClick('African food')}
          >
            <p>
              <span className='mr-2'>
                <GiBowlOfRice />
              </span>{' '}
              African
            </p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'Chicken' && 'active'
            }`}
            onClick={() => handleCategoryClick('Chicken')}
          >
            <p>
              <span className='mr-2'>
                <GiChickenLeg />
              </span>{' '}
              Chicken
            </p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'Small chops' && 'active'
            }`}
            onClick={() => handleCategoryClick('Small chops')}
          >
            <p>
              <span className='mr-2'>
                <GiPieSlice />
              </span>{' '}
              Small chops
            </p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'Seafood' && 'active'
            }`}
            onClick={() => handleCategoryClick('Seafood')}
          >
            <p>
              <span className='mr-2'>
                <GiFoodChain />
              </span>{' '}
              Seafood
            </p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'Italian' && 'active'
            }`}
            onClick={() => handleCategoryClick('Italian')}
          >
            <p>
              <span className='mr-2'>
                <GiNoodles />
              </span>{' '}
              Italian
            </p>
          </li>
          <li
            className={`single-filter ${
              activeCategory === 'Drinks' && 'active'
            }`}
            onClick={() => handleCategoryClick('Drinks')}
          >
            <p>
              <span className='mr-2'>
                <BiDrink />
              </span>{' '}
              Drinks
            </p>
          </li>
        </ul>

        {/* Displaying message for empty category */}
        {filteredFoodList.length === 0 && (
          <>
            <div className='flex justify-center'>
              <img src={noItemImg} className='img-fluid' alt='error icon' />
            </div>
            <p className='text-center text-lg font-semibold'>
              Sorry. No items in this category yet.
            </p>
          </>
        )}

        <div className='main-food-container grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
          {filteredFoodList.map((food, index) => (
            <FoodCardItem
              key={index}
              slug={food.slug}
              image={food.image}
              title={food.title}
              category={food.category}
              delivery={food.delivery}
              price={food.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCard
