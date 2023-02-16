import React, { useState } from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import { ProjectMains } from '../components/project/ProjectMains'
import MobileHedaer from '../components/mobile/MobileHedaer'


import '../css/about/about.css';
import '../css/blog/blog.css';

const Project = () => {

  const [clicks, setCliks] = useState(false);
  const ClikNull=(val)=> {
    setCliks(val)
  }

  return (

    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <ProjectMains wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>
  )
}

export default Project