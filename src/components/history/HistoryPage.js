import React from 'react'

import Footer from '../home/Footer'

export const HistoryPage = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='contactBanner' style={{ backgroundImage: 'url(../../images/banner-5.jpg)' }}>
            <div className='cotactText'>
                <h1>History</h1>
                <h5>Work & History Details</h5>
            </div>
        </section>
        
        <section className='histroy_section'>
            <div className='row'>
                <div className='col-xl-6 col-md-12'>
                  <h4>Education</h4>
                  <div className='histroy_width'>
                    <div className='histroy_boxes'>
                      <div className='round_box'>
                        <ul>
                          <li className='d-flex justify-content-between align-items-center'>
                            <h5>Madhyamik Exam</h5>
                            <span>2008 - 2010</span>
                          </li>
                        </ul>
                        <h6>Student</h6>
                        <p>Passed M.P in 2008 at 68.13% fromW.B.B.S.E Board.</p>
                      </div>
                    </div>
                    <div className='histroy_boxes'>
                      <div className='round_box'>
                        <ul>
                          <li className='d-flex justify-content-between align-items-center'>
                            <h5>Higher Secondary</h5>
                            <span>2008 - 2010</span>
                          </li>
                        </ul>
                        <h6>Student</h6>
                        <p>Passed H.S in 2010 at 66.04% from W.B.C.H.S.E Board.</p>
                      </div>
                    </div>
                    <div className='histroy_boxes'>
                      <div className='round_box'>
                        <ul>
                          <li className='d-flex justify-content-between align-items-center'>
                            <h5>B.A</h5>
                            <span>2010 - 2013</span>
                          </li>
                        </ul>
                        <h6>Student</h6>
                        <p>Passed B.A in 2013 at 54.63% from W.B.S.U Board.</p>
                      </div>
                    </div>
                    <div className='histroy_boxes'>
                      <div className='round_box'>
                        <ul>
                          <li className='d-flex justify-content-between align-items-center'>
                            <h5>M.A</h5>
                            <span>2013 - 2015</span>
                          </li>
                        </ul>
                        <h6>Student</h6>
                        <p>Passed M.A in 2015 at 56.38% from K.U Board.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-md-12'>
                  <h4>Work History</h4>
                  <div className='histroy_width'>
                    <div className='histroy_boxes'>
                      <div className='round_box'>
                        <ul>
                          <li className='d-flex justify-content-between align-items-center'>
                            <h5>Reddensoft Infotech Pvt Ltd</h5>
                            <span>2022 - 2023</span>
                          </li>
                        </ul>
                        <h6>Employe</h6>
                        <p>1 years Exprience</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}
