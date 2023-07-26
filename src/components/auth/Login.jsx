import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './FormStyle.css'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validate user credentials
    if (email === 'jojo@gmail.com' && password === 'pass') {
      // Generate dynamic token
      const token = uuidv4()
      // Set user authentication token in local storage
      localStorage.setItem('token', token)
      // Redirect to home page
      window.location.href = '/dashboard'
    } else {
      setErrorMessage('Invalid email or password')
      setTimeout(() => {
        setErrorMessage('')
      }, 9000)
    }
  }

  return (
    <div className='form-section flex'>
      <div className='form-img-bg login'></div>
      <div className='container section-padding'>
        <div className='exit'>
          <Link to='/login'>
            <BsArrowLeftSquare />
          </Link>
        </div>
        <div className='text-center flex justify-center'>
          <Link to='/' className='form-logo'>
            Foodify
          </Link>
        </div>
        <div className='flex justify-center'>
          <div className='form-wrap py-7'>
            <div className='form-top-area text-center mb-9'>
              <h2>Welcome back!</h2>
              <span>Enter your details below</span>
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <p
                  className='error-msg'
                  data-aos='flip-down'
                  data-aos-duration='1000'
                >
                  {errorMessage}
                </p>
              )}
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
              <div className='form-btns grid grid-cols-1 gap-5 lg:flex flex-row-reverse justify-between mt-5'>
                <Link to='/reset-password'>
                  <p className='text-right'>Forgot password?</p>
                </Link>
                <button className='btn-2 w-full md:w-auto' type='submit'>
                  Sign in
                </button>
              </div>
              <div className='register-section mt-16 text-center'>
                <p>
                  New here?{' '}
                  <Link to='/register'>
                    <span>Create an account</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
