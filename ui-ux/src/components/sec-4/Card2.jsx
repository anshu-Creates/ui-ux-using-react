import React from 'react'

const Card2 = (props) => {
  return (
    <div className='bg-black flex rounded-3xl p-5 h-75 justify-between w-160'>
        <div className='p-5 flex flex-col justify-between'>
            <h2 className='text-4xl text-black bg-white'>{props.h2}</h2>
            <div className='flex items-center gap-5'>
              <i className="ri-arrow-right-up-line text-4xl w-9.5 rounded-full bg-white text-black"></i>
              <p className='text-lg text-white'>Learn more</p>
            </div>
        </div>
        <img src={props.img} className='w-80 h-70 p-5'></img>
    </div>
  )
}

export default Card2