import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

const RightSide = ({ClikNull}) => {
  const [animate, setAnimate] = useState(false);
  const [headerClass, setHeaderClass] = useState(true);

  useLayoutEffect(() => {
      if (window.location.pathname === '/') {
          setHeaderClass(true);
      } else {
          setHeaderClass(false);
      }
  }, [headerClass]);

  function handleClick() {
      setAnimate(prevCheck => !prevCheck);
      ClikNull(prevCheck => !prevCheck);
  }

  return (

      <header className={(animate ? 'navigation active' : 'navigation')}>
          <div className="humberger_box">
            <Link to="" onClick={handleClick} className='humbergar'>
              <span></span>
            </Link>
          </div>
          <nav>
              <div className='navInner'>
                  <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Services</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/download">Download Cv</Link>
                    </li>
                  </ul>
              </div>
          </nav>
      </header >
      
  )
}

export default RightSide