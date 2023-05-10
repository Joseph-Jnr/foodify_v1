import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './FormStyle.css'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'
import userData from '../../api/userData'

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
    addUser()
  }

  const addUser = () => {
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
        {/* <Link to='/login' className='exit flex'>
            <BsArrowLeftSquare /> <span className='ml-2'>Go back</span>
          </Link> */}
        <div className='flex justify-center'>
          <div className='form-wrap py-7'>
            <div className='form-top-area text-center mb-9'>
              <h2>Create an account</h2>
              <span>Enter your details below</span>
            </div>
            <form onSubmit={handleSubmit}>
              {errorMessage && <p>{errorMessage}</p>}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='form-field'>
                  <label htmlFor='name'>Full name</label>
                  <input type='text' id='name' name='name' required />
                </div>
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
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='form-field'>
                  <label htmlFor='phone'>Phone number</label>
                  <input type='tel' id='phone' name='phone' required />
                </div>
                <div className='form-field'>
                  <label htmlFor='address'>Address</label>
                  <input type='text' id='address' name='address' required />
                </div>
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
              <div className='form-btns grid grid-cols-1 gap-5 lg:flex justify-between mt-5'>
                <div>
                  <button className='btn-2' type='submit'>
                    Register
                  </button>
                </div>
                <Link className='text-sm text-slate-400' to='/login'>
                  Already have an account? <b>Sign in</b>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
