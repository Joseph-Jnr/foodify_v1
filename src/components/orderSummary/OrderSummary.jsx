import { useState } from 'react'
import { useSelector } from 'react-redux'
import './OrderSummary.css'
import '../auth/FormStyle.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import paystackLogo from '../../assets/icons/paystack.png'
import kkiapayLogo from '../../assets/icons/kkiapay.png'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const OrderSummary = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  const [showLocationInput, setShowLocationInput] = useState(false)
  const [userLocation, setUserLocation] = useState(
    'Lot 589 Kpankpan Akpakpa, Cotonou'
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const newLocation = event.target.elements.location.value
    setUserLocation(newLocation)
    setShowLocationInput(false)
    toast.success('Location updated')
  }

  return (
    <div className='order-summary-section section-padding'>
      <div className='container pt-28 pb-16 flex justify-center'>
        <div className='summary-wrap'>
          <h1 className='text-center'>Your Order Summary</h1>

          {/* Details header */}
          <div className='order-details-header mt-14  grid grid-cols-3 gap-9 font-extrabold py-2'>
            <div className='title'>Product</div>
            <div className='qty text-center'>Qty</div>
            <div className='amt text-right'>Price</div>
          </div>

          {/* Order details */}
          <div className='order-details mt-5'>
            {cartProducts.map((product) => (
              <div
                key={product.id}
                className='single-order-detail grid grid-cols-3 gap-9 text-sm py-4'
              >
                <div className='title'>{product.title}</div>
                <div className='qty text-center'>{product.quantity}</div>
                <div className='amt text-right'>
                  {product.totalPrice.toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* User's delivery location */}
          <div className='location mt-6 justify-between sm:flex'>
            <p className='text-sm'>
              Your order will be delivered to <br />
              <b className='text italic flex items-center user-location'>
                <HiOutlineLocationMarker className='mr-1' /> {userLocation}
              </b>
            </p>

            <div className='form-btns mt-4 sm:mt-0'>
              {!showLocationInput && (
                <button
                  className='btn-2 text-xs'
                  onClick={() => setShowLocationInput(true)}
                >
                  Change location
                </button>
              )}
            </div>
          </div>

          {/* Field to add new delivery location */}
          {showLocationInput && (
            <form className='mt-4 form-btns' onSubmit={handleSubmit}>
              <div className='form-field'>
                <label htmlFor='location'>Location</label>
                <input type='text' id='location' name='location' required />
              </div>
              <button className='btn-2 text-xs mt-2' type='submit'>
                Save location
              </button>
            </form>
          )}

          {/* Summary footer */}
          <div className='summary-footer text-right mt-12'>
            <h1 className='font-bold'>
              Total: <span>{totalAmount.toLocaleString()}</span>
            </h1>
            <p className='text-sm'>
              Delivery fee: <span>1,000</span> FCFA
            </p>
          </div>
        </div>
      </div>
      <div className='container text-center'>
        <p>Choose a payment method</p>
        <div className='flex justify-center'>
          <div className='form-payment-methods flex justify-center items-center mt-6'>
            <Link to='/paystack-checkout' className='pmt-mthd mx-4'>
              <img src={paystackLogo} alt='logo' width={100} />
            </Link>
            <div className='divider-v'></div>
            <Link to='/kkiapay-checkout' className='pmt-mthd mx-4'>
              <img src={kkiapayLogo} alt='logo' width={100} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
