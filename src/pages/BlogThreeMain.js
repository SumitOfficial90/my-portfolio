import React, { useState } from 'react'

import RightSide from '../components/home/RightSide'
import BlogThree from '../components/blog/BlogThree'
import MobileHedaer from '../components/mobile/MobileHedaer'

const BlogOneMain = ({wid}) => {

    const [clicks, setCliks] = useState(false);
    const ClikNull=(val)=> {
      setCliks(val)
    }
    
  return (
    <div className='main_box'>

    <MobileHedaer />

    <BlogThree wid={clicks}/>
    <RightSide ClikNull={ClikNull}/>
    
  </div>
  )
}

export default BlogOneMain