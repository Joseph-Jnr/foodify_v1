import React from 'react'
import pageNotFound from '../assets/icons/404-error.png'
import Button from '../components/UI/button/Button'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='section-padding page-err-section'>
      <div className='container section-padding text-center'>
        <div className='page-err-image flex justify-center mt'>
          <img src={pageNotFound} className='img-fluid' alt='404 image' />
        </div>
        <h1>Ooops!</h1>
        <p className='mb-10'>Seems you lost your way!</p>
        <Link to='/'>
          <Button text={'Go back home'} btnClass={'main-btn'} />
        </Link>
      </div>
    </div>
  )
}

export default Error404
