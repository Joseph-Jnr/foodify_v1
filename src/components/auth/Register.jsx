import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './FormStyle.css'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Redirect to home page
    window.location.href = '/'
  }

  return (
    <div className='form-section flex'>
      <div className='form-img-bg register'></div>
      <div className='container section-padding'>
        <Link to='/' className='form-logo text-center flex justify-center'>
          Foodify
        </Link>
        {/* <Link to='/' className='exit flex'>
          <BsArrowLeftSquare /> <span className='ml-2'>Foodify</span>
        </Link> */}
        <div className='flex justify-center'>
          <div className='form-wrap py-7'>
            <div className='form-top-area text-center mb-9'>
              <h2>Create an account</h2>
              <span>Enter your details below</span>
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p>{errorMessage}</p>}
              <div className='form-field'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className='form-field'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className='form-btns flex justify-between mt-5'>
                <button className='btn-2' type='submit'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
