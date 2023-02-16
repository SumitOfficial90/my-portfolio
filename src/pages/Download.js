import React, { useState } from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import MobileHedaer from '../components/mobile/MobileHedaer'

import { DownloadMain } from '../components/download/DownloadMain'

import '../css/download/download.css';

const Download = () => {

    const [clicks, setCliks] = useState(false);
    const ClikNull=(val)=> {
      setCliks(val)
    }
    
  return (
    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <DownloadMain wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>
  )
}

export default Download