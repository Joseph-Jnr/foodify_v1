import React from 'react'
import { BsDashSquareFill, BsFillPlusSquareFill } from 'react-icons/bs'
import { HiTrash } from 'react-icons/hi'
import './CartItem.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/shopping-cart/cartSlice'

const CartItem = ({ item }) => {
  const { id, title, price, image, quantity, totalPrice } = item

  const dispatch = useDispatch()

  const incrementItem = (event) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
        totalPrice,
      })
    )
    event.stopPropagation()
  }

  const decreaseItem = (event) => {
    dispatch(cartActions.removeItem(id))
    event.stopPropagation()
  }

  const deleteItem = (event) => {
    dispatch(cartActions.deleteItem(id))
    event.stopPropagation()
  }

  return (
    <>
      <div className='cart-item flex justify-between'>
        <div className='product-img-area'>
          <div className='img-wrap'>
            <img src={image} className='img-fluid' alt='product image' />
          </div>
          <h4>{title}</h4>
          <div className='product-price'>
            <p>
              <span>{price.toLocaleString()}</span>{' '}
              <span className='font-light'>FCFA</span>
            </p>
          </div>
        </div>
        <div className='product-qty-btns flex justify-center mx-5'>
          <span onClick={(event) => decreaseItem(event)}>
            <BsDashSquareFill />
          </span>
          <span>{quantity}</span>
          <span onClick={(event) => incrementItem(event)}>
            <BsFillPlusSquareFill />
          </span>
        </div>
        <div className='product-delete-btn'>
          <div
            className='flex justify-center'
            onClick={(event) => deleteItem(event)}
          >
            <HiTrash />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
