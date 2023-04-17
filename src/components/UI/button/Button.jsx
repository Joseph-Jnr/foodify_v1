import React from 'react'
import './Button.css'

const Button = ({ icon, text, btnClass, iconClass, onClick }) => {
  return (
    <span onClick={onClick} className={`btn ${btnClass}`}>
      <span className={iconClass}>{icon}</span>
      <span>{text}</span>
    </span>
  )
}

export default Button
