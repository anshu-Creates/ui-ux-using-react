import React from 'react'

const Navbar = () => {
  return (
    <div >
        <ul className='flex gap-10 items-center tracking-wider justify-between'>
            <li><a>About us</a></li>
            <li><a>Services </a></li>
            <li><a>Use Cases</a></li>
            <li><a>Pricing</a></li>
            <li><a>Blog</a></li>
            <li><button className='border-2 rounded-xl pl-7 pr-7 pt-2.5 pb-2.5'>Request a quote</button></li>

        </ul>
    </div>
  )
}

export default Navbar