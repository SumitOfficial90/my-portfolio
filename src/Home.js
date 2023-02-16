import React, { useState } from 'react'
import LeftSide from './components/home/LeftSide'
import RightSide from './components/home/RightSide'
import Banner from './components/home/Banner'
import MobileHedaer from './components/mobile/MobileHedaer'


import '../src/css/home/banner/banner.css';
import '../src/css/home/leftSide/leftSide.css';
import '../src/css/home/rightSide/rightSide.css';
import '../src/css/home/footer/footer.css';
import '../src/css/mobile/mobileMenu.css';
import '../src/css/mobile/media.css';

const Home = () => {
  const [clicks, setCliks] = useState(false);
  const ClikNull=(val)=> {
    setCliks(val)
  }

  return (
    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <Banner wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>
  )
}

export default Home