import React from 'react'
import Section1 from './components/sec-1/Section1'
import Section2 from './components/sec-2/Section2'
import Section3 from './components/sec-3/Section3'

const App = () => {
  return (
    <div className='pl-20 pr-20'>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default App