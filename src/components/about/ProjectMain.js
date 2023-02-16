import React from 'react'
import { Link } from 'react-router-dom'

export const ProjectMain = () => {
  return (
    <div className='project_main'>
        <div className='row'>
            <div className='col-12 heading'>
                <h3>My Project</h3>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                <a href="https://www.stannp.com" target="_blank" className='project_main_div'>
                    <div className='images'>
                        <img src='./images/stannp-banner.jpg' alt='' />
                        <div className='text'>
                            <img src='./images/search.png' alt='' />
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                <a href="https://sasradar.com/staging/" target="_blank" className='project_main_div'>
                    <div className='images'>
                        <img src='./images/sas-rader-banner.png' alt='' />
                        <div className='text'>
                            <img src='./images/search.png' alt='' />
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                <a href="https://ricoman.bigwavedevelopment.com/" target="_blank" className='project_main_div'>
                    <div className='images'>
                        <img src='./images/ricoman-banner-black.jpg' alt='' />
                        <div className='text'>
                            <img src='./images/search.png' alt='' />
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                <a href="https://demo.bigwavedevelopment.com/digital/" target="_blank" className='project_main_div'>
                    <div className='images'>
                        <img src='./images/digital-banner.jpg' alt='' />
                        <div className='text'>
                            <img src='./images/search.png' alt='' />
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                <a href="http://works-reddensoft.com/signulu/index.html" className='project_main_div'>
                    <div className='images'>
                        <img src='./images/signulu-banner.jpg' alt='' />
                        <div className='text'>
                            <img src='./images/search.png' alt='' />
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-12 more_btn text-center'>
                <Link to="/project">View More</Link>
            </div>
        </div>
    </div>
  )
}
