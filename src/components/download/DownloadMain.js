import React from 'react'

import Footer from '../home/Footer'

export const DownloadMain = ({wid}) => {

    const onButtonClick = () => {
        fetch('pdfhtml.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = "../images/pdfhtml.pdf";
                alink.download = 'pdfhtml.pdf';
                alink.click();
            })
        })
    }

  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='contactBanner' style={{ backgroundImage: 'url(../../images/banner-8.jpg)' }}>
            <div className='cotactText'>
                <h1>Download Cv</h1>
                <h5>Download my resume..</h5>
            </div>
        </section>

        <section className='download_cv_div'>
            <div className='download_cv'>
                <div className='top'>
                    <h1>Sumit Paul</h1>
                    <h5>Front End Deweloper</h5>
                </div>
                <div className='bottom row'>
                    <div className='col-xl-4 col-md-12 left'>
                        <div className='bottom_boxes'>
                            <h4>Personal Details</h4>
                            <ul>
                                <li>
                                    <h5>Father's Name :</h5>
                                    <span>Sudeb Paul</span>
                                </li>
                                <li>
                                    <h5>Date of birth :</h5>
                                    <span>30.03.1993</span>
                                </li>
                                <li>
                                    <h5>Language :</h5>
                                    <span>Bengali, Hindi, English</span>
                                </li>
                                <li>
                                    <h5>Hobbies :</h5>
                                    <span>Playing Cricket, Listening Music, Photography</span>
                                </li>
                                <li>
                                    <h5>Phone :</h5>
                                     +91 9804372258
                                </li>
                                <li>
                                    <h5>Gmail :</h5>
                                    sumitpaul900@gmail.com
                                </li>
                                <li>
                                    <label>Address :</label>
                                    Ganti paul para, P.O - Ganganagar, P.S - Narayanpur, Dist - 24pgs (N), Kol - 132 
                                </li>
                            </ul>
                        </div>
                        <div className='bottom_boxes'>
                            <h4>Education</h4>
                            <ul>
                                <li>
                                    <h6>Passed M.P in 2008</h6>
                                </li>
                                <li>
                                    <h6>Passed H.S in 2010</h6>
                                </li>
                                <li>
                                    <h6>Passed B.A in 2013</h6>
                                </li>
                                <li>
                                    <h6>Passed M.A in 2016</h6>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-8 col-md-12 right'>
                        <div className='right_box'>
                            <h4>Career Objective</h4>
                            <p>I am in search of a professional environment, where lots of opportunities are in waiting. My work exprience encompasses in-depth UI programming concepts with out-of-thebox graphic designing.</p>
                        </div>
                        <div className='right_box'>
                            <h4>Key Skills</h4>
                            <ul>
                                <li>
                                    <label>Adobe Photoshop</label>
                                    <span>Web-design adobe Photoshop & Figma, Email design.</span>
                                </li>
                                <li>
                                    <label>Html, Css and Scss</label>
                                    <span>PSD to HTML Conversion, HTML5 and CSS3, Responsive Web Design, Flexbox, Bootstrap 3, 4 & 5, Scss</span>
                                </li>
                                <li>
                                    <label>Jquery</label>
                                    <span>Jquery</span>
                                </li>
                                <li>
                                    <label>React</label>
                                    <span>Recat Front-end-development</span>
                                </li>
                                <li>
                                    <label>Vue</label>
                                    <span>Vue Front-end-development</span>
                                </li>
                            </ul>
                        </div>
                        <div className='right_box'>
                            <h4>Work Exprience</h4>
                            <ul>
                                <li>
                                  <label>Reddensoft Infotech Privat Limited</label>
                                  <span>1years Exprience</span>
                                </li>
                            </ul>
                        </div>
                        <div className='right_box'>
                            <h4>Declaration</h4>
                            <p>I here by declare that above information is true, correct and complete to the best of my knowledge and belife.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='download_cv_btn'>
                <button onClick={onButtonClick}>Download Cv</button>
            </div>
        </section>

        <Footer />
    </div>
  )
}
