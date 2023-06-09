import React, { useState } from 'react'
import './FoodCardItem.css'
import { MdShoppingBasket } from 'react-icons/md'
import { AiOutlineTags } from 'react-icons/ai'
import { TbScanEye, TbTruckDelivery } from 'react-icons/tb'
import Button from '../UI/button/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'
import { BsBasket2Fill } from 'react-icons/bs'
import { toast } from 'react-toastify'

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
    toast.success('Item added', {
      position: 'top-center',
      theme: 'dark',
      autoClose: 2000,
    })
  }

  return (
    <div className='single-food-card' data-aos='fade-up'>
      <div
        className='img-area'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt='food image' />
        {isHovered && (
          <div className='btns flex'>
            <div>
              <Button
                icon={<BsBasket2Fill />}
                btnClass={'default-btn isIconOnly'}
                iconClass={'flex items-center justify-center'}
                onClick={addToCart}
              />
            </div>
            <div className='mx-3'></div>
            <Link to={`/foods/${slug}`}>
              <Button
                icon={<TbScanEye />}
                btnClass={'default-btn isIconOnly'}
                iconClass={'flex items-center justify-center'}
              />
            </Link>
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
