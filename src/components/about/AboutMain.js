import React from 'react'
import Footer from '../home/Footer'
import { ProjectMain } from './ProjectMain'
import { ContactMain } from './ContactMain'

export const AboutMain = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='aboutBanner' style={{ backgroundImage: 'url(../../images/banner-2.jpg)' }}>
            <div className='aboutText'>
                <h6>FREELANCE DIGITAL DESIGNER</h6>
                <h1>Hello, I'm Sumit<br/>
                Wellcome to my<br/>
                World</h1>
            </div>
        </section>

        <section className='about_myself'>
            <div className='row'>
                <div className='col-xl-5 col-md-4 col-sm-12 padding div_flex'>
                    <div className='about_myself_image '>
                        <img src='./images/about-me.jpg' alt='' />
                    </div>
                </div>
                <div className='col-xl-7 col-md-8 colsm-12 padding'>
                    <div className='about_myself_text'>
                        <h3>About Me</h3>
                        <p>I am a website frontend designer, I love to do this job and I do this job with passion.</p>

                        <div className='about_myself_tab'>
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-Skills-tab" data-bs-toggle="pill" data-bs-target="#pills-Skills" type="button" role="tab" aria-controls="pills-Skills" aria-selected="true">Main Skills</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-Exprience-tab" data-bs-toggle="pill" data-bs-target="#pills-Exprience" type="button" role="tab" aria-controls="pills-Exprience" aria-selected="false">Exprience</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-Education-tab" data-bs-toggle="pill" data-bs-target="#pills-Education" type="button" role="tab" aria-controls="pills-Education" aria-selected="false">Education</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-Skills" role="tabpanel" aria-labelledby="pills-Skills-tab" tabindex="0">
                                    <div className='edu_content'>
                                        <ul>
                                            {/* <li>Adobe Photoshop</li> */}
                                            <li>
                                                <p>Web-design adobe Photoshop & Figma, Email design.</p>
                                            </li>
                                            {/* <li>Html, Css, Scss and Jquery</li> */}
                                            <li>
                                                <p>PSD to HTML Conversion, HTML5 and CSS3, Responsive Web Design, Flexbox, Bootstrap 3, 4 & 5, Scss, Jquery </p>
                                            </li>
                                            {/* <li>React</li> */}
                                            <li>
                                                <p>Recat Front-end-development</p>
                                            </li>
                                            {/* <li>Vue</li> */}
                                            <li>
                                                <p>Vue Front-end-development</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-Exprience" role="tabpanel" aria-labelledby="pills-Exprience-tab" tabindex="0">
                                    <div className='edu_content'>
                                        <ul>
                                            <li>Reddensoft Infotech Privat Limited</li>
                                            <li>
                                                <p>1 years exprience</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-Education" role="tabpanel" aria-labelledby="pills-Education-tab" tabindex="0">
                                    <div className='edu_content'>
                                        <ul>
                                            <li>Passed <p>M.P</p> in 2008 at 68.13% from<span>W.B.B.S.E </span>Board.</li>
                                            <li>Passed <p>H.S</p> in 2010 at 66.04% from<span>W.B.C.H.S.E </span>Board.</li>
                                            <li>Passed <p>B.A</p> in 2013 at 54.63% from<span>W.B.S.U </span>Board.</li>
                                            <li>Passed <p>M.A</p> in 2015 at 56.38% from<span>K.U </span>Board.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ProjectMain />

        <ContactMain />

        <Footer />
    </div>
  )
}


