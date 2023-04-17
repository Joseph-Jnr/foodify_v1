import React, { useState } from 'react'
import './Cart.css'
import { GrFormClose } from 'react-icons/gr'
import cartImg from '../../assets/icons/out-of-stock.webp'

const Cart = () => {
  const [cartVisible, setCartVisible] = useState(true)

  const handleCartClose = () => {
    setCartVisible(false)
  }

  return (
    <>
      {cartVisible && (
        <>
          <div className='backdrop'></div>
          <div className='cart'>
            <div className='cart-header flex justify-between'>
              <div>
                <h1>Cart</h1>
              </div>
              <div
                className='close text-2xl flex justify-center'
                onClick={handleCartClose}
              >
                <GrFormClose />
              </div>
            </div>

            <div className='cart-body'>
              <img src={cartImg} alt='empty cart' />
              <p className='flex justify-center'>Oooops! Your cart is empty</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
