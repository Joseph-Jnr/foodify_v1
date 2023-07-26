import React from 'react'
import './Balance.css'
import { CiDollar } from 'react-icons/ci'
import { AiOutlineEye } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Balance = () => {
  return (
    <div className='mt-14'>
      <div className='flex justify-center'>
        <div className='balance-wrap p-4 mt-4 lg:p-12 relative w-full'>
          <div className='balance-container shadow-lg py-6 md:flex justify-between'>
            <div className='wallet-balance flex items-center justify-center text-center px-3 w-full'>
              <div>
                <div className='title text-xs text-slate-600'>
                  TOTAL BALANCE
                </div>
                <h1 className='font-medium text-xl mt-2'>XOF 200,789</h1>
                <div className='btn-area'>
                  <div className='custom-button'>
                    <span className='mr-2 text-base'>
                      <CiDollar />
                    </span>
                    Transaction history
                  </div>
                </div>
              </div>
            </div>
            <div className='separator-line bg-slate-300'></div>
            <div className='total-inflow flex items-center justify-center text-center px-3 w-full'>
              <div>
                <div className='title text-xs text-slate-600'>
                  PENDING ORDER
                </div>
                <h1 className='font-medium text-xl mt-2'>XOF 12,250</h1>
                <div className='btn-area'>
                  <div className='custom-button'>
                    <span className='mr-2 text-base'>
                      <HiOutlineLocationMarker />
                    </span>
                    Track order
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='balance-sub-component sub-1'></div>
          <div className='balance-sub-component sub-2'></div>
        </div>
      </div>
    </div>
  )
}

export default Balance
