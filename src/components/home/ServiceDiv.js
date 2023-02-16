import React from 'react'

function ServiceDiv() {
  return (
    <div>
        <section className='my_service'>
            <div className='row'>
                <div className='col-12 heading'>
                    <h3>My Services </h3>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 padding'>
                    <div className='service_box'>
                        <img src="../images/web-design.png" />
                        <h4>Website Design</h4>
                        <p>These services can include a range of design and development tasks such as creating wireframes, designing graphics and visual elements, developing website functionality, and implementing responsive design for optimal viewing on different devices.</p>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 padding'>
                    <div className='service_box'>
                        <img src="../images/laptop-coding.png" />
                        <h4>Clean Codeing</h4>
                        <p>Clean coding services involve the development of website codeing that is easy to read, understand, and maintain. The benefits of clean coding include easier debugging, faster development time, and smoother collaboration between developers.</p>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 padding'>
                    <div className='service_box'>
                        <img src="../images/responsive.png" />
                        <h4>Responsive</h4>
                        <p>Responsive design services typically involve a range of design and development tasks, such as creating flexible layouts and using fluid grids, incorporating media queries to detect the device type and screen size, and implementing dynamic image resizing and optimization.</p>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 padding'>
                    <div className='service_box'>
                        <img src="../images/graphic-design.png" />
                        <h4>Layout Design</h4>
                        <p>Layout design services may include tasks such as creating wireframes, selecting typography, choosing color schemes, arranging visual elements, and incorporating user interface design principles. These services may be provided by me.</p>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 padding'>
                    <div className='service_box'>
                        <img src="../images/mobile-email.png" />
                        <h4>Email Design</h4>
                        <p>Email design services involve the creation of visually appealing and effective email templates and campaigns. This can include designing custom email templates, creating visual elements such as images, graphics, and icons, and writing compelling copy that engages the target audience.</p>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-6 col-md-6 padding'>
                    <div className='service_box'>
                        <img src="../images/compact-camera.png" />
                        <h4>Photography</h4>
                        <p>Photography services involve the creation of high-quality, professional photographs for a variety of purposes. This can include commercial photography for marketing and advertising purposes.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ServiceDiv