import React from 'react'
import quoteImg from '../../assets/about_illustration2.svg'
import './About.css'
import ServiceCard from '../services/ServiceCard'
import serviceList from '../../api/serviceList'

const About = () => {
  return (
    <section className='section-padding quote-section'>
      <div className='container section-padding'>
        <div className='quote-wrap'>
          <div className='quote-img' data-aos='fade-right'>
            <img src={quoteImg} alt='chef' />
          </div>
          <div className='quote-txt'>
            <div className='section-header quote-header'>
              <h2 data-aos='fade-down'>Welcome to Foodify</h2>
              <div className='text-underline'></div>
            </div>
            <p className='font-light' data-aos='fade-left'>
              Foodify is your go-to online restaurant for delicious Nigerian,
              Benin, and other intercontinental dishes. At Foodify, we believe
              in using fresh, locally-sourced ingredients to create flavorful
              dishes that cater to all tastes and preferences. Our menu is
              inspired by the rich culinary traditions of Benin Republic and
              Nigeria, as well as other intercontinental dishes. We take pride
              in our authentic recipes and cooking techniques, which are passed
              down through generations and are a true reflection of our cultural
              heritage. Our friendly and knowledgeable staff is always ready to
              assist you with your order and ensure a memorable dining
              experience. Order now and taste the best of Cotonou and beyond,
              right from the comfort of your home.
            </p>
          </div>
        </div>

        <div className='services-wrap section-padding mt-24'>
          <div className='section-header-alt services-header'>
            <h2>How we serve you</h2>
            <div className='text-underline'></div>
          </div>
          <div className='services-container px-5 md:px-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3'>
            {serviceList.map((services, index) => (
              <ServiceCard
                key={index}
                icon={services.icon}
                title={services.title}
                body={services.body}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
