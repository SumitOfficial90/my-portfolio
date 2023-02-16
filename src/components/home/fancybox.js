import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox(props) {

    const imageItems = [
        {url: '../../images/ab-img.jpg', name:'image1'}
    ]
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};

    NativeFancybox.bind(delegate, opts);

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <div>
      {imageItems && imageItems.length > 0 ? imageItems.map((items, i) => {
        return (
          <div className="fanchy_box_div">
              <a key={i} data-fancybox="gallery" href={items.url}>
                <img alt="" src={items.url} />
              </a>
              <div className="profile_text text-center">
                <h5>Sumit Paul</h5>
                <h6>Front-end Deweloper <br/> Ui/UX Designer</h6>
              </div>
          </div>
          
        )
      }):(
        <h1>No data</h1>
      )}
    
  </div>;
}

export default Fancybox;
