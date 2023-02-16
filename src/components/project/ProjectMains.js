import React from 'react'
import Footer from '../home/Footer'
import { ProjectMain } from '../about/ProjectMain'

export const ProjectMains = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='contactBanner' style={{ backgroundImage: 'url(../../images/banner-4.jpg)' }}>
            <div className='cotactText'>
                <h1>My Project</h1>
                <h5>All my projects, I do with heart.</h5>
            </div>
        </section>

        {/* <div className='project_main'>
            <div className='row'>
                <div className='col-12 heading'>
                    <h3>My Project</h3>
                </div>
                <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                    <Link to="/" target='_blank' className='project_main_div'>
                        <div className='images'>
                            <img src='./images/project-1.jpg' alt='' />

                            <div className='text'>
                                <h4>My First Project</h4>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                <p>Website Link</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                    <Link to="/" target='_blank' className='project_main_div'>
                        <div className='images'>
                            <img src='./images/project-1.jpg' alt='' />

                            <div className='text'>
                                <h4>My First Project</h4>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                <p>Website Link</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                    <Link to="/" target='_blank' className='project_main_div'>
                        <div className='images'>
                            <img src='./images/project-1.jpg' alt='' />

                            <div className='text'>
                                <h4>My First Project</h4>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                <p>Website Link</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div> */}

        <ProjectMain />

        <Footer />
    </div>
  )
}
