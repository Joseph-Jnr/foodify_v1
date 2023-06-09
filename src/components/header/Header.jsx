import React, { useState, useEffect } from 'react'
import heroImg from '../../assets/hero.png'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsCaretDownFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Header.css'
import Button from '../UI/button/Button'

const Header = () => {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const textArray = ['Crave', 'Order', 'Enjoy']
  const typingDelay = 200
  const erasingDelay = 100
  const newTextDelay = 2000

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleTypingAnimation()
    }, typingDelay)

    return () => clearInterval(intervalId)
  }, [text, isTyping])

  const handleTypingAnimation = () => {
    if (isTyping) {
      if (text.length < textArray[textIndex].length) {
        setText((prevText) => prevText + textArray[textIndex][text.length])
      } else {
        setIsTyping(false)
        setTimeout(() => {
          setIsTyping(false)
          setTextIndex((textIndex + 1) % textArray.length)
        }, erasingDelay)
      }
    } else {
      if (text.length > 0) {
        setText((prevText) => prevText.slice(0, -1))
      } else {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
        }, newTextDelay)
      }
    }
  }

  return (
    <header>
      <div className='main-header'>
        <div className='container mx-auto px-10'>
          <div className='text-area'>
            <h1>
              <span className='bold-text'>
                <span className='typed-text'>{text}</span>
                <span className={`cursor ${isTyping ? 'typing' : ''}`}>
                  &nbsp;
                </span>{' '}
                your
              </span>
              <br />
              favourite dish
            </h1>
            <p>
              Looking for the best way to enjoy your favourite meals? Order
              online and indulge in our mouth-watering selection!
            </p>
            <div className='header-btns'>
              <Button
                icon={<HiOutlineShoppingBag />}
                btnClass={'black-btn hasIcon'}
                iconClass={'flex items-center justify-center'}
                onClick={() =>
                  document.querySelector('#foodlist').scrollIntoView()
                }
                text={'Order now'}
              />
              <Link to='/menu' className='btn default-btn flex items-center'>
                Our Menu
                <span>
                  <BsCaretDownFill />
                </span>
              </Link>
            </div>
          </div>
          <div className='img-area'>
            <img
              data-aos='fade-left'
              src={heroImg}
              className='img-fluid'
              alt='jollof rice'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
