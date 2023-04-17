import React, { useState } from 'react'
import './Cart.css'
import { GrFormClose } from 'react-icons/gr'
import cartImg from '../../assets/icons/empty-cart.png'

const Cart = ({ handleClose, open }) => {
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

            <div className='cart-body mt-16'>
              <img src={cartImg} className='img-fluid' alt='empty cart' />
              <p className='flex justify-center font-semibold'>
                Oooops! Your cart is empty
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
