import React, { useState } from 'react'
import './Cart.css'
import { GrFormClose } from 'react-icons/gr'
import cartImg from '../../assets/icons/empty-cart.png'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = ({ handleClose, open }) => {
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <>
      {open && (
        <>
          <div className='backdrop'></div>
          <div className='cart'>
            <div className='cart-header flex justify-between'>
              <div>
                <h1>Cart</h1>
              </div>
              <div
                className='close text-2xl flex justify-center'
                onClick={handleClose}
              >
                <GrFormClose />
              </div>
            </div>

            {cartProducts.length === 0 ? (
              <div className='cart-body mt-8'>
                <div className='empty-cart'>
                  <img src={cartImg} className='img-fluid' alt='empty cart' />
                  <p className='flex justify-center font-semibold'>
                    Oooops! Your cart is empty
                  </p>
                </div>
              </div>
            ) : (
              <div className='cart-body mt-8'>
                <div className='cart-item-list'>
                  {cartProducts.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))}
                </div>

                <div className='cart-bottom'>
                  <h6>
                    Subtotal: <span>{totalAmount.toLocaleString()}</span> FCFA
                  </h6>
                  <div className='text-center'>
                    <Link to='/order-summary' onClick={handleClose}>
                      <button className='checkout-btn font-bold'>
                        PAY NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Cart
