import React from 'react'
import './MenuItem.css'
import { TbScanEye } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Button from '../UI/button/Button'
import { AiOutlineTags } from 'react-icons/ai'

const MenuItem = ({ id, image, title, category, slug, price }) => {
  return (
    <div className='single-menu-item grid grid-cols-2 gap-4 my-5'>
      <div className='left-area grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div className='img-wrap'>
          <Link to={`/foods/${slug}`}>
            <img src={image} alt={title} />
          </Link>
        </div>
        <div className='text-area'>
          <h4 className='font-extrabold'>{title}</h4>
          <p className='text-sm font-light flex items-center'>
            <span className='mr-1'>
              <AiOutlineTags />
            </span>{' '}
            {category}
          </p>
          <h5 className='mt-3 text-xl font-bold'>
            {price} <span className='text-sm'>FCFA</span>
          </h5>
        </div>
      </div>
      <div className='preview-btn flex justify-end'>
        <Link to={`/foods/${slug}`}>
          <Button
            icon={<TbScanEye />}
            btnClass={'default-btn isIconOnly'}
            iconClass={'flex items-center justify-center'}
          />
        </Link>
      </div>
    </div>
  )
}

export default MenuItem
