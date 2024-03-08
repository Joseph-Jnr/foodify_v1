import React from 'react'
import { BsToggleOn } from 'react-icons/bs'
import { FiBell } from 'react-icons/fi'
import { RiArrowDownSLine, RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <>
      <nav className='px-4 lg:px-10 border-b border-b-slate-300 bg-white fixed w-full lg:w-[calc(100%-20%)]'>
        <div className='flex items-center justify-between'>
          <div className='brand text-lg font-normal'>Home</div>
          <div className='mobile lg:hidden'>
            <div className='nav-toggle'>
              <RiMenu4Fill size={30} />
            </div>
          </div>
          <div className='links hidden lg:flex items-center'>
            <div className='notification mx-4 flex justify-center'>
              <span className='w-9 h-9 border cursor-pointer rounded-full flex items-center justify-center bg-slate-300'>
                <FiBell className='text-slate-600' size={20} />
              </span>
            </div>
            <div className='profile flex justify-center'>
              <Link to='/login'>
                <div className='profile-toggle flex items-center justify-between text-xs px-1 py-1 w-20 pr-3 text-slate-300 rounded-full cursor-pointer bg-slate-300'>
                  <span className='initials w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-full'>
                    OA
                  </span>
                  <RiArrowDownSLine className='text-slate-900' size={22} />
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
