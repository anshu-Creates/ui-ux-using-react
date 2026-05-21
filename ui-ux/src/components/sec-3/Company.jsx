import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Company = (props) => {
  return (
    <div className='w-35 p-1.5 h-12.5 rounded-lg'>
        <img src={props.src} className='w-full bg-white object-contain h-full'></img>
    </div>
  )
}

export default Company