import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../home/Footer'


export const BlogMain = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='contactBanner' style={{ backgroundImage: 'url(../../images/banner-6.jpg)' }}>
            <div className='cotactText'>
                <h1>Blog</h1>
                <h5>My happy moments</h5>
            </div>
        </section>

        <section className='blog_box'>
            <div className='row'>
                <Link to='/blogOneMain' className='col-xl-4 col-md-6 col-sm-12'>
                    <div className='image_box'>
                        <img src='./images/blog-santinikatan-7.jpg' alt='' />
                    </div>
                    <div className='image_text'>
                        <h4>My First Blog</h4>
                        <p>Santinikatan</p>
                        <div className='date'>
                            <p>25.07.2017</p>
                        </div>
                    </div>
                </Link>

                <Link to='/blogTwoMain' className='col-xl-4 col-md-6 col-sm-12'>
                    <div className='image_box'>
                        <img src='./images/blog-mayapur-1.jpg' alt='' />
                    </div>
                    <div className='image_text'>
                        <h4>My Second Blog</h4>
                        <p>Mayapur</p>
                        <div className='date'>
                            <p>20.11.2020</p>
                        </div>
                    </div>
                </Link>

                <Link to='/blogThreeMain' className='col-xl-4 col-md-6 col-sm-12'>
                    <div className='image_box'>
                        <img src='./images/blog-eco-1.jpg' alt='' />
                    </div>
                    <div className='image_text'>
                        <h4>My Third Blog</h4>
                        <p>Eco Park</p>
                        <div className='date'>
                            <p>25.12.2023</p>
                        </div>
                    </div>
                </Link>

            </div>
        </section>
        
        <Footer />
    </div>
  )
}
