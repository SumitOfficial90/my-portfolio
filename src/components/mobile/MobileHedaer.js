import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Fancybox from '../home/fancybox';


const MobileHedaer = () => {

    // const [animate, setAnimate] = useState(false);
    // const [headerClass, setHeaderClass] = useState(true);
    // const [addclass, setAddclass] = useState();
  
    // useLayoutEffect(() => {
    //     if (window.location.pathname === '/') {
    //         setHeaderClass(true);
    //     } else {
    //         setHeaderClass(false);
    //     }
    // }, [headerClass]);
  
    // function handleClick() {
    //     setAnimate(prevCheck => !prevCheck);
  
    // }

    const [addclass, setAddclass] = useState();
  
    const HandelAddClass = (val) => {
          if(val === addclass){
              setAddclass(); 
          } else {
              setAddclass(val);
          }
    }

  return (
    <div className='mobile_header_div'>
        <div className='mobile_header_box d-flex justify-content-between align-items-center'>
            <div className={`col-6 right ${addclass === 'b' ? 'active':''}`}>
                <div className={`right_click ${addclass === 'b' ? 'right_active':''}`}>
                    <Link onClick={() => HandelAddClass('b')} className='abc_click'>
                        <span></span>
                    </Link>
                </div>
            </div>
            <div className={`col-6 left ${addclass === 'a' ? 'active':''}`}>
                <div className={`left_click ${addclass === 'a' ? 'left_active':''}`}>
                    <Link onClick={() => HandelAddClass('a')} className='abc_click'>
                        <span></span>
                    </Link>
                </div>
            </div>
        </div>


        <div className={`left_box ${addclass === 'a' ? 'active':''}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/service">Services</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/download">Download Cv</Link>
                </li>
            </ul>
        </div>

        <div className={`right_box ${addclass === 'b' ? 'active':''}`}>
            <section className='box_left_side box_left_block'>
                <div className='box_left_side_one'>
                    <Fancybox />
                </div>
                <div className='box_left_side_two'>
                <div className='box_two_address'>
                    <ul>
                        <li className='d-flex justify-content-between align-items-center'>
                            <span>Residence:</span>
                            <h6>Rajarhat</h6>
                        </li> 
                        <li className='d-flex justify-content-between align-items-center'>
                            <span>City:</span>
                            <h6>Kolkata</h6>
                        </li>
                        <li className='d-flex justify-content-between align-items-center'>
                            <span>age:</span>
                            <h6>30</h6>
                        </li>
                    </ul>
                </div>
                <div className='box_two_language'>
                    <h5>Languages</h5>
                    <div className='lan_box'>
                        <div className='lan_boxes'>
                        <div class="progress blue">
                            <span class="progress-left">
                            <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                            <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">90%</div>
                        </div>
                        <h6>Bengali</h6>
                        </div>
                        <div className='lan_boxes'>
                        <div class="progress blue">
                            <span class="progress-left">
                            <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                            <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">30%</div>
                        </div>
                        <h6>English</h6>
                        </div>
                        <div className='lan_boxes'>
                        <div class="progress blue">
                            <span class="progress-left">
                            <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                            <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">60%</div>
                        </div>
                        <h6>Hindi</h6>
                        </div>
                    </div>
                </div>
                <div className='box_two_Coding'>
                    <h5>Coding</h5>
                    <div className='box_two_Coding_div'>
                        <div className='coding_name d-flex justify-content-between align-items-center'>
                            <h6>Html</h6>
                            <span>70%</span>
                        </div>
                        <div className='coding_bar'>
                            <div class="progress_two">
                                <div class="color_two"></div>
                            </div>
                        </div>
                    </div>
                    <div className='box_two_Coding_div'>
                        <div className='coding_name d-flex justify-content-between align-items-center'>
                            <h6>Css</h6>
                            <span>70%</span>
                        </div>
                        <div className='coding_bar'>
                            <div class="progress_two">
                                <div class="color_two"></div>
                            </div>
                        </div>
                    </div>
                    <div className='box_two_Coding_div'>
                        <div className='coding_name d-flex justify-content-between align-items-center'>
                            <h6>Jquery</h6>
                            <span>30%</span>
                        </div>
                        <div className='coding_bar'>
                            <div class="progress_two">
                                <div class="color_three"></div>
                            </div>
                        </div>
                    </div>
                    <div className='box_two_Coding_div'>
                        <div className='coding_name d-flex justify-content-between align-items-center'>
                            <h6>React</h6>
                            <span>40%</span>
                        </div>
                        <div className='coding_bar'>
                            <div class="progress_two">
                                <div class="color_four"></div>
                            </div>
                        </div>
                    </div>
                    <div className='box_two_Coding_div'>
                        <div className='coding_name d-flex justify-content-between align-items-center'>
                            <h6>Vue</h6>
                            <span>40%</span>
                        </div>
                        <div className='coding_bar'>
                            <div class="progress_two">
                                <div class="color_four"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box_two_Knowledge'>
                    <h5>Knowledge</h5>
                    <ul>
                        <li>
                            <span>
                                <img src='../../images/check.svg' />
                            </span>
                            Bootstrap, Tailwind css
                        </li>
                        <li>
                            <span>
                                <img src='../../images/check.svg' />
                            </span>
                            Scss
                        </li>
                        <li>
                            <span>
                                <img src='../../images/check.svg' />
                            </span>
                            Photoshop, Figma
                        </li>
                        <li>
                            <span>
                                <img src='../../images/check.svg' />
                            </span>
                            Email design
                        </li>
                        <li>
                            <span>
                                <img src='../../images/check.svg' />
                            </span>
                            React
                        </li>
                        <li>
                            <span>
                                <img src='../../images/check.svg' />
                            </span>
                            Vue
                        </li>
                    </ul>
                </div>
                <div className='box_two_download'>
                    <Link to="/">
                        Download cv
                    </Link>
                </div>
                </div>
                <div className='box_left_side_three'>
                    <ul className='d-flex justify-content-center align-items-center'>
                        <li>
                        <Link target="_blank" to="https://www.facebook.com/sumit.paul.56679015/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"><img src='../../images/facebook.svg' /></Link>
                        </li>
                        <li>
                        <Link target="_blank" to="https://www.instagram.com/invites/contact/?i=7klf6dgv6v6p&utm_content=24aujho"><img src='../../images/instagram.svg' /></Link>
                        </li>
                        <li>
                        <Link target="_blank" to="https://www.linkedin.com/feed/"><img src='../../images/linkdin.svg' /></Link>
                        </li>
                        <li>
                        <Link target="_blank" to="mailto:sumitpaul900@gmail.com"><img src='../../images/google.svg' /></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>


    </div>
  )
}

export default MobileHedaer