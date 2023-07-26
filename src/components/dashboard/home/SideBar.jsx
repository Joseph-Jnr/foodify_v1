import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { CgToolbarRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='bg-slate-900 hidden lg:block h-screen w-1/2 lg:w-1/4 float-left z-50 absolute lg:fixed py-8'>
      <div className='profile-area px-8 lg:px-12 flex items-center'>
        <div className='profile-icon w-8 h-8 flex items-center justify-center p-2 bg-slate-500 text-slate-200 rounded-full'>
          <FaUserAlt size={12} />
        </div>
        <div className='profile-name ml-2'>
          <p className='text-sm text-slate-300'>Nwobodo</p>
          <p className='text-xs text-slate-500'>Manager</p>
        </div>
      </div>

      <div className='navigation'>
        <div className='navigation-set mt-10'>
          <div className='nav-header px-8 lg:px-12'>
            <p className='nav-header-text text-[#ffd998] text-xs tracking-[5px]'>
              MAIN
            </p>
          </div>

          <div className='side-nav-links mt-2'>
            <Link className='flex items-center px-8 lg:px-12 text-slate-200 text-xs py-3'>
              <span className='icon mr-2'>
                <CgToolbarRight size={18} />
              </span>
              Dashboard
            </Link>
          </div>
        </div>

        {/* Single set */}
        <div className='navigation-set mt-10'>
          <div className='nav-header px-8 lg:px-12'>
            <p className='nav-header-text text-[#ffd998] text-xs tracking-[5px]'>
              BUSINESS
            </p>
          </div>

          <div className='side-nav-links mt-2'>
            <Link className='flex items-center bg-slate-500 px-8 lg:px-12 text-slate-200 text-xs py-3'>
              <span className='icon mr-2'>
                <CgToolbarRight size={18} />
              </span>
              Home
            </Link>
            <Link className='flex items-center px-8 lg:px-12 text-slate-200 text-xs py-3'>
              <span className='icon mr-2'>
                <CgToolbarRight size={18} />
              </span>
              Orders
            </Link>
            <Link className='flex items-center px-8 lg:px-12 text-slate-200 text-xs py-3'>
              <span className='icon mr-2'>
                <CgToolbarRight size={18} />
              </span>
              Transactions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
