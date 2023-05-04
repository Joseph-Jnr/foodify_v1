import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ icon, title, body }) => {
  return (
    <div className='single-service-card relative mt-12' data-aos='fade-up'>
      <div className='service-card-icon-wrap'>
        <div className='service-card-icon flex justify-center items-center'>
          {icon}
        </div>
      </div>
      <div className='service-card-body text-center'>
        <h1 className='mb-4'>{title}</h1>
        <p className='font-light'>{body}</p>
      </div>
    </div>
  )
}

export default ServiceCard
