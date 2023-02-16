import React from 'react'
import ServiceDiv from '../home/ServiceDiv';

import Footer from '../home/Footer'

export const ServiceMain = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='contactBanner' style={{ backgroundImage: 'url(../../images/banner-3.jpg)' }}>
            <div className='cotactText'>
                <h1>Service</h1>
                <h5>All services are available here</h5>
            </div>
        </section>
        
        <ServiceDiv />

        <Footer />
    </div>
  )
}
