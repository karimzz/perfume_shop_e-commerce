import React from 'react'
import "./standardbutton.css"

const StandardButton = ({content}) => {
  return (
    <button className='btn text-center text-black font-bold px-10 py-6  standard-btn'>
        {content}
    </button>
  )
}

export default StandardButton
