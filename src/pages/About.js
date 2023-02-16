import React, { useState } from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import { AboutMain } from '../components/about/AboutMain'
import MobileHedaer from '../components/mobile/MobileHedaer'

import '../css/about/about.css';


const About = () => {

  const [clicks, setCliks] = useState(false);
  const ClikNull=(val)=> {
    setCliks(val)
  }

  return (
    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <AboutMain wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>
  )
}

export default About