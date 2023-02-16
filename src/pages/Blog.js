import React, { useState } from 'react'
import LeftSide from '../components/home/LeftSide'
import RightSide from '../components/home/RightSide'
import MobileHedaer from '../components/mobile/MobileHedaer'

import '../css/blog/blog.css';
import { BlogMain } from '../components/blog/BlogMain';

const Blog = () => {

  const [clicks, setCliks] = useState(false);
  const ClikNull=(val)=> {
    setCliks(val)
  }

  return (
    <div className='main_box'>

      <MobileHedaer />

      <LeftSide />
      <BlogMain wid={clicks}/>
      <RightSide ClikNull={ClikNull}/>
      
    </div>
  )
}

export default Blog