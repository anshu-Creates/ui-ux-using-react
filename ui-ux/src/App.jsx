import React from 'react'
import Logo from './components/sec-1/Logo'
import Navbar from './components/sec-1/Navbar'

const App = () => {
  return (
    <div className='flex items-center justify-between pt-10 pl-20 pr-20 pb-10 '>
      <Logo/>
      <Navbar/>
    </div>
  )
}

export default App