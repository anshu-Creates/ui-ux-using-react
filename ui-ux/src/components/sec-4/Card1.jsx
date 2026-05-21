import React from 'react'

const Card1 = (props) => {
    console.log(props);
  return (
    <div className='border-3 flex rounded-3xl p-5 h-75 justify-between w-160 shadow-[0_10px_0_black]'>
        <div className='p-5 flex flex-col justify-between'>
            <h2 className='text-4xl bg-lime-400'>{props.h2}</h2>
            <div className='flex items-center gap-5'>
              <i className="ri-arrow-right-up-line text-4xl w-9.5 rounded-full bg-black text-lime-400"></i>
              <p className='text-lg'>Learn more</p>
            </div>
        </div>
        <img src={props.img} className='p-5'></img>
    </div>
  )
}

export default Card1