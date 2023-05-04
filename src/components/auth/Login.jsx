import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './FormStyle.css'
import { Link } from 'react-router-dom'

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
      window.location.href = '/'
    } else {
      setErrorMessage('Invalid email or password')
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }

  return (
    <div className='form-section flex'>
      <div className='form-img-bg login'></div>
      <div className='container section-padding'>
        <Link to='/' className='form-logo text-center flex justify-center'>
          Foodify
        </Link>
        <div className='flex justify-center'>
          <div className='form-wrap py-7'>
            <div className='form-top-area text-center mb-9'>
              <h2>Welcome back!</h2>
              <span>Enter your details below</span>
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p className='error-msg'>{errorMessage}</p>}
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
                  Sign in
                </button>
                <Link to='/reset-password'>
                  <p>Forgot password?</p>
                </Link>
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
