import React from 'react'
import './FoodCardItem.css'
import { MdShoppingBasket } from 'react-icons/md'
import { AiOutlineTags } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import Button from '../UI/button/Button'

const FoodCardItem = ({ image, title, category, delivery, price }) => {
  return (
    <div className='single-food-card'>
      <div className='img-area'>
        <img src={image} alt='food image' />
      </div>
      <div className='content'>
        <div className='description'>
          <h1>{title}</h1>
          <p className='flex items-center'>
            <span className='mr-1'>
              <AiOutlineTags />
            </span>{' '}
            {category}
          </p>
          <p className='flex items-center'>
            <span className='mr-1'>
              <TbTruckDelivery />
            </span>{' '}
            {delivery}
          </p>
        </div>
        <div className='price'>
          <span className='amount'>{price.toLocaleString()}</span>{' '}
          <span className='currency'>FCFA</span>
        </div>
        {/* <div className='btns'>
          <Button
            icon={<MdShoppingBasket />}
            btnClass={'black-btn hasIcon'}
            iconClass={'flex items-center justify-center'}
            href={''}
            text={'Add to cart'}
          />
        </div> */}
      </div>
    </div>
  )
}

export default FoodCardItem
