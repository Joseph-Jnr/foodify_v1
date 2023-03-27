import React from 'react'
import './Button.css'

const Button = ({ icon, text, btnClass, iconClass, href }) => {
  return (
    <a href={href} className={`btn ${btnClass}`}>
      <span className={iconClass}>{icon}</span>
      <span>{text}</span>
    </a>
  )
}

export default Button
