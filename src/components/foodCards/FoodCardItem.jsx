import React, { useState } from 'react'
import './FoodCardItem.css'
import { MdShoppingBasket } from 'react-icons/md'
import { AiOutlineTags } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import Button from '../UI/button/Button'
//import { Context } from '../../context'
import { foodList } from './data'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'

const FoodCardItem = ({
  id,
  image,
  title,
  category,
  delivery,
  slug,
  price,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
      })
    )
  }

  return (
    <div className='single-food-card'>
      <div
        className='img-area'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt='food image' />
        {isHovered && (
          <div className='btns'>
            <Button
              icon={<MdShoppingBasket />}
              btnClass={'black-btn hasIcon'}
              iconClass={'flex items-center justify-center'}
              onClick={addToCart}
              text={'Add to cart'}
            />
          </div>
        )}
        {isHovered && <div className='overlay'></div>}
      </div>
      <div className='content'>
        <div className='description'>
          <Link to={`/foods/${slug}`}>
            <h1>{title}</h1>
          </Link>
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
      </div>
    </div>
  )
}

export default FoodCardItem
