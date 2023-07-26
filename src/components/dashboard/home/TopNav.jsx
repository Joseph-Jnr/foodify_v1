import React from 'react'
import { BsToggleOn } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { RiArrowDownSLine, RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
      <nav className='px-4 lg:px-10 border-b border-b-slate-300 w-full lg:w-3/4'>
        <div className='flex items-center justify-between'>
          <div className='brand text-lg font-normal'>Dashboard</div>
          <div className='mobile lg:hidden'>
            <div className='nav-toggle'>
              <RiMenu4Fill size={30} />
            </div>
          </div>
          <div className='links hidden lg:flex items-center'>
            <div className='notification mx-4 flex justify-center'>
              <span className='w-9 h-9 border cursor-pointer rounded-full flex items-center justify-center border-slate-400'>
                <FiBell className='text-slate-600' size={20} />
              </span>
            </div>
            <div className='profile flex justify-center'>
              <Link to='/login'>
                <div className='profile-toggle flex items-center text-xs px-2 py-2 text-slate-300 rounded-full cursor-pointer bg-slate-900'>
                  <span className='initials w-5 h-5 bg-slate-600 text-white flex items-center justify-center rounded-full'>
                    JJ
                  </span>
                  <span className='mx-2 text-slate-200'>Joseph Jnr</span>
                  <RiArrowDownSLine className='text-slate-200' size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNav
