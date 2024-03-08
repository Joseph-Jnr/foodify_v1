import React from 'react'
import { FaPercentage, FaStoreAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CiHome } from 'react-icons/ci'
import { RiLineChartLine } from 'react-icons/ri'
import { BsBag, BsBookHalf } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

const SideBar = () => {
  return (
    <div className=' bg-slate-900 hidden lg:block h-screen w-1/2 lg:w-1/5 float-left z-50 absolute lg:fixed p-8'>
      <div className='profile-area flex items-center mb-12'>
        <div className='profile-icon w-8 h-8 flex items-center justify-center p-2 bg-white text-slate-950 rounded-full'>
          N
        </div>
        <div className='profile-name ml-2'>
          <p className='text-sm text-slate-300'>Oluwadamilola Ajakoko</p>
          <p className='text-xs text-slate-500'>Manager</p>
        </div>
      </div>

      <div className='navigation flex flex-col gap-3'>
        <Link to='/'>
          <div className='side-nav-link text-white bg-slate-500 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <CiHome size={20} />
            </div>
            <div className='label'>Home</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='side-nav-link text-white hover:bg-slate-400 hover:bg-opacity-5 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <BsBag size={20} />
            </div>
            <div className='label'>Orders</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='side-nav-link text-white hover:bg-slate-400 hover:bg-opacity-5 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <FaStoreAlt size={20} />
            </div>
            <div className='label'>Store front</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='side-nav-link text-white hover:bg-slate-400 hover:bg-opacity-5 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <FaPercentage size={20} />
            </div>
            <div className='label'>Promotions & Discounts</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='side-nav-link text-white hover:bg-slate-400 hover:bg-opacity-5 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <RiLineChartLine size={20} />
            </div>
            <div className='label'>Analytics</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='side-nav-link text-white hover:bg-slate-400 hover:bg-opacity-5 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <BsBookHalf size={20} />
            </div>
            <div className='label'>Content Management</div>
          </div>
        </Link>

        <Link to='/'>
          <div className='side-nav-link text-white hover:bg-slate-400 hover:bg-opacity-5 py-3 px-5 rounded-lg flex gap-2 items-center'>
            <div className='icon'>
              <FiSettings size={20} />
            </div>
            <div className='label'>Settings</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
