import React from 'react'
import Slider1 from '../component/Slider1'
import './Companies.scss'
import Slider2 from '../component/Slider2'

function Companies() {
  return (
    <div className='companies'>
      <div className='companies-content'>
      <p>More Than 1000 Most Trusted Companies!!!</p>
      </div>
      <div className='slider'> <Slider2/></div>
      <div className='slider'> <Slider1/></div>
      <div className='slider'> <Slider2/></div>
    </div>
  )
}

export default Companies
