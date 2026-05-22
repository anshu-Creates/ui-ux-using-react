import React from 'react'

const Navbar = () => {
  return (
    <div >
        <ul className='flex gap-20 items-center font-medium tracking-wider justify-between'>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Services </a></li>
            <li><a href='#'>Use Cases</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Blog</a></li>
            <li><button className='border-2 tracking-widest rounded-xl pl-15 pr-15 pt-5 pb-5'>Request a quote</button></li>

        </ul>
    </div>
  )
}

export default Navbar