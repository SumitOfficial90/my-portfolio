import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import Footer from './Footer';
import ServiceDiv from '../home/ServiceDiv';



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";

const Banner = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='banner' style={{ backgroundImage: 'url(../../images/banne-1.jpg)' }}>
            <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
                pagination={{
                    type: "progressbar",
                  }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='banner_text'>
                        <h1>Discover my Amazing<br /> Art Space!</h1>

                        <div className='banner_code d-flex align-items-center'>
                        <div className='code_box d-flex align-items-center'>
                            <img src='../../images/angle-left.svg' alt='' />
                            <h3>code</h3>
                            <img src='../../images/angle-right.svg' alt='' />
                        </div>

                        <div className='code_letter'>
                                <TypeAnimation
                                        sequence={[
                                        'I build Design Mockup.',
                                        1000,
                                        'I build Web Intearfaces.',
                                        1000,
                                        'I build React Website.',
                                        1000,
                                        'I build Vue Website.',
                                        1000,
                                        ]}
                                        speed={50}
                                        style={{ fontSize: '2em' }}
                                        wrapper="span"
                                        repeat={Infinity} 
                                />
                        </div>

                            <div className='code_box d-flex align-items-center'>
                                <img src='../../images/angle-left.svg' alt='' />
                                <h3>code</h3>
                                <img src='../../images/angle-right.svg' alt='' />
                            </div>
                        </div>

                        <Link to="/project">Explore Now</Link>
                    </div>
                    <div className='banner_image'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner_text'>
                        <h1>Discover my Amazing<br /> Work Space!</h1>

                        <div className='banner_code d-flex align-items-center'>
                        <div className='code_box d-flex align-items-center'>
                            <img src='../../images/angle-left.svg' alt='' />
                            <h3>code</h3>
                            <img src='../../images/angle-right.svg' alt='' />
                        </div>

                        <div className='code_letter'>
                                <TypeAnimation
                                        sequence={[
                                        'I build Design Mockup.',
                                        1000,
                                        'I build Web Intearfaces.',
                                        1000,
                                        'I build React Website.',
                                        1000,
                                        'I build Vue Website.',
                                        1000,
                                        ]}
                                        speed={50}
                                        style={{ fontSize: '2em' }}
                                        wrapper="span"
                                        repeat={Infinity} 
                                />
                        </div>

                            <div className='code_box d-flex align-items-center'>
                                <img src='../../images/angle-left.svg' alt='' />
                                <h3>code</h3>
                                <img src='../../images/angle-right.svg' alt='' />
                            </div>
                        </div>

                        <Link to="/project">Explore Now</Link>
                    </div>
                    <div className='banner_image'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner_text'>
                        <h1>Discover my Amazing<br /> Design Space!</h1>

                        <div className='banner_code d-flex align-items-center'>
                        <div className='code_box d-flex align-items-center'>
                            <img src='../../images/angle-left.svg' alt='' />
                            <h3>code</h3>
                            <img src='../../images/angle-right.svg' alt='' />
                        </div>

                        <div className='code_letter'>
                                <TypeAnimation
                                        sequence={[
                                        'I build Design Mockup.',
                                        1000,
                                        'I build Web Intearfaces.',
                                        1000,
                                        'I build React Website.',
                                        1000,
                                        'I build Vue Website.',
                                        1000,
                                        ]}
                                        speed={50}
                                        style={{ fontSize: '2em' }}
                                        wrapper="span"
                                        repeat={Infinity} 
                                />
                        </div>

                            <div className='code_box d-flex align-items-center'>
                                <img src='../../images/angle-left.svg' alt='' />
                                <h3>code</h3>
                                <img src='../../images/angle-right.svg' alt='' />
                            </div>
                        </div>

                        <Link to="/project">Explore Now</Link>
                    </div>
                    <div className='banner_image'>

                    </div>
                </SwiperSlide>
            </Swiper>
        </section>

        <section className='perfonce_digit'>
            <div className='row'>
                <div className='col-xl-3 col-md-6'>
                    <div className='digit d-flex align-items-center'>
                        <span>1+</span>
                        <h6>Years Experience</h6>
                    </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                    <div className='digit d-flex align-items-center'>
                        <span>10+</span>
                        <h6>Completed Projects</h6>
                    </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                    <div className='digit d-flex align-items-center'>
                        <span>10+</span>
                        <h6>Happy Customers</h6>
                    </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                    <div className='digit d-flex align-items-center'>
                        <span>2+</span>
                        <h6>Honors and Awards</h6>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className='my_service'>
            <div className='row'>
                <div className='col-12 heading'>
                    <h3>My Services </h3>
                </div>
                <div className='col-lg-4 col-md-6 padding'>
                    <div className='service_box'>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 padding'>
                    <div className='service_box'>
                        <h4>Clean Codeing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 padding'>
                    <div className='service_box'>
                        <h4>Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 padding'>
                    <div className='service_box'>
                        <h4>Layout Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 padding'>
                    <div className='service_box'>
                        <h4>Email Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 padding'>
                    <div className='service_box'>
                        <h4>Photography</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus</p>
                    </div>
                </div>
            </div>
        </section> */}

        <ServiceDiv />

        <Footer />
    </div>
  )
}

export default Banner