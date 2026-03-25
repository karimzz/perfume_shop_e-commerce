import React from 'react'
import "./categorycard.css"

const CategoryCard = ({title , img , link}) => {
  return (
    <div className='card relative'>
        <div className="content-text absolute">
            <h3 className='  card-title'>{title}</h3>
            <a href={link} className='  link'>Shop Now</a>
        </div>
        <img src={img} className='rounded-sm' alt="" />
    </div>
  )
}

export default CategoryCard
