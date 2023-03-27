import React from 'react'
import './FoodCardItem.css'
import { MdShoppingBasket } from 'react-icons/md'
import { AiOutlineTags } from 'react-icons/ai'

const FoodCardItem = ({ image, title, category, price }) => {
  return (
    <div className='single-food-card col-md-4'>
      <div className='img-area'>
        <img src={image} alt='food image' />
      </div>
      <div className='content'>
        <h1>{title}</h1>
        <p className='flex items-center'>
          <span className='mr-1'>
            <AiOutlineTags />
          </span>{' '}
          {category}
        </p>
        <div className='price'>
          <span className='amount'>{price.toLocaleString()}</span>{' '}
          <span className='currency'>FCFA</span>
        </div>
        <div className='btns'>
          <a href='' className='btn black-btn'>
            <span className='flex items-center justify-center'>
              <MdShoppingBasket />
            </span>
            <span>Add to cart</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FoodCardItem
