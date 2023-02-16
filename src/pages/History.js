import React, { useState } from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import MobileHedaer from '../components/mobile/MobileHedaer'

import { HistoryPage } from '../components/history/HistoryPage'

import '../css/history/History.css';

const History = () => {

    const [clicks, setCliks] = useState(false);
    const ClikNull=(val)=> {
      setCliks(val)
    }

  return (

    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <HistoryPage wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>

  )
}

export default History