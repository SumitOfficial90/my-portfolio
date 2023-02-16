import React from 'react'

import { ContactMain } from '../about/ContactMain'
import Footer from '../home/Footer'

export const ContactPage = ({wid}) => {
  return (
    <div className={`main_banner ${wid ? 'mainHeader':''}`}>

        <section className='contactBanner' style={{ backgroundImage: 'url(../../images/banner-7.jpg)' }}>
            <div className='cotactText'>
                <h1>Contact With Us</h1>
                <h5>Contact anytime ..</h5>
            </div>
        </section>

        <div className='con_information'>
            <div className='row'>
                <div className='col-12 heading'>
                    <h3>Contact information </h3>
                </div>
                <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                    <div className='con_box'>
                        <ul>
                            <li>
                                <h5>Country :</h5>
                                <h6>India</h6>
                            </li>
                            <li>
                                <h5>City :</h5>
                                <h6>Calcutta</h6>
                            </li>
                            <li>
                                <h5>Streat :</h5>
                                <h6>Rajarhat</h6>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                    <div className='con_box'>
                        <ul>
                            <li>
                                <h5>Email :</h5>
                                <a target="_blank" href="mailto:sumitpaul900@gmail.com">Email Link</a>
                            </li>
                            <li>
                                <h5>Linkdin :</h5>
                                <a target="_blank" href="https://www.linkedin.com/feed/">Linkdin Link</a>
                            </li>
                            <li>
                                <h5>Skype :</h5>
                                <a target="_blank" href="skype:sumit-designer.reddensoft@outlook.com">Skype Link</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-xl-4 col-md-6 col-sm-12 padding'>
                    <div className='con_box'>
                        <ul>
                            <li>
                                <h5>Instagram :</h5>
                                <a target="_blank" href="https://www.instagram.com/invites/contact/?i=7klf6dgv6v6p&utm_content=24aujho">Insta Link</a>
                            </li>
                            <li>
                                <h5>Facebook</h5>
                                <a target="_blank" href="https://www.facebook.com/sumit.paul.56679015/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0">facebook Link</a>
                            </li>
                            <li>
                                <h5>Mobile-1 :</h5>
                                <a href="tel:9804372258">9804372258</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <ContactMain />

        <Footer />
    </div>
  )
}
