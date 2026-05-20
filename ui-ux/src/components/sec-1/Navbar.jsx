import React from 'react'

const Navbar = () => {
  return (
    <div >
        <ul className='flex gap-10 items-center font-medium tracking-wider justify-between'>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Services </a></li>
            <li><a href='#'>Use Cases</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Blog</a></li>
            <li><button className='border-2 rounded-xl pl-7 pr-7 pt-2.5 pb-2.5'>Request a quote</button></li>

        </ul>
    </div>
  )
}

export default Navbar