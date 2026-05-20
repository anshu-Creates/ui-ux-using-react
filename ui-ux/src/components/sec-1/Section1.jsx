import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Section1 = () => {
  return (
    <div className='flex items-center justify-between pt-10 pb-10'>
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Section1