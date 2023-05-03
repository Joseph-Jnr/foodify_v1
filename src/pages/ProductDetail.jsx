import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineTags } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdShoppingBasket } from 'react-icons/md'
import Button from '../components/UI/button/Button'
import FoodCardItem from '../components/foodCards/FoodCardItem'
import { cartActions } from '../store/shopping-cart/cartSlice'
import { foodList } from '../api/foodData'
import '../components/foodCards/ProductDetail.css'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = foodList.find((product) => product.slug === slug)
  const { title, price, category, description, image, id } = product

  const relatedProducts = foodList.filter(
    (food) => food.category === category && food.slug !== slug
  )

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
    <>
      <div className='section-padding product-detail-section'>
        <div className='container section-padding'>
          <div className='product-info grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2'>
            <div className='preview-img-area'>
              <img src={image} alt={title} />
            </div>
            <div className='product-details'>
              <h2>{title}</h2>
              <div className='meta flex mb-6'>
                <span className='flex items-center'>
                  <span className='mr-1'>
                    <AiOutlineTags />
                  </span>{' '}
                  {category}
                </span>
                <span className='flex items-center ml-4'>
                  <span className='mr-1'>
                    <TbTruckDelivery />
                  </span>{' '}
                  Free Delivery
                </span>
              </div>
              <div className='description'>
                <p>{description}</p>
              </div>
              <div className='price mt-5 mb-10'>
                <p>
                  <span>{price.toLocaleString()}</span> FCFA
                </p>
              </div>
              <div className='add-to-cart-btn w-full'>
                <Button
                  icon={<MdShoppingBasket />}
                  btnClass={'black-btn hasIcon pd'}
                  iconClass={'flex items-center justify-center'}
                  onClick={addToCart}
                  text={'Add to cart'}
                />
              </div>
            </div>
          </div>
          {relatedProducts.length > 0 && (
            <div className='related-products mt-32'>
              <h2>You might also like</h2>

              <div className='main-food-container mt-8 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
                {relatedProducts.map((food, index) => (
                  <FoodCardItem
                    key={index}
                    id={food.id}
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
          )}
        </div>
      </div>
    </>
  )
}

export default ProductDetail
