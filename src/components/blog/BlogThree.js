import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

import Footer from '../home/Footer'

function Fancybox(props) {

    const imageItems = [
        {url: '../../images/blog-eco-1.jpg', name:'image1'},
        {url: '../../images/blog-eco-2.jpg', name:'image2'},
        {url: '../../images/blog-eco-3.jpg', name:'image3'},
        {url: '../../images/blog-eco-4.jpg', name:'image4'},
        {url: '../../images/blog-eco-5.jpg', name:'image5'},
    ]
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return    <div className="main_box main_boxes">
                <div className="main_gallery">
                    <div className="back_btn">
                        <Link to="/blog">
                            <span><img src="../images/arrow-left.png" /></span>
                            Back To Previous
                        </Link>
                    </div>
                    <div className="main_banners">
                        {imageItems && imageItems.length > 0 ? imageItems.map((items, i) => {
                        return (
                        <div className="col-3 fanchy_box_dive">
                            <a key={i} data-fancybox="gallery" href={items.url}>
                                <img alt="" src={items.url} />
                            </a>
                        </div>
                            )
                        }):(
                            <h1>No data</h1>
                        )}
                    </div>
                    <Footer />
                </div>
            </div>
}

export default Fancybox;
