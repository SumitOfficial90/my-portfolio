import React, { useState } from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import MobileHedaer from '../components/mobile/MobileHedaer'

import { ContactPage } from '../components/contact/ContactPage'

import '../css/contact/contact.css';

const Contact = () => {

  const [clicks, setCliks] = useState(false);
  const ClikNull=(val)=> {
    setCliks(val)
  }

  return (
    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <ContactPage wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>
  )
}

export default Contact