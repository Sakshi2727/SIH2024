import React from 'react'
import Slider from "react-slick"
import './slider.css'
import pic7 from "../../assets/homepage/pic7new.png";
import pic8 from "../../assets/homepage/pic8.png";
import pic6 from "../../assets/homepage/pic6.png";

const Homeslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 1500,    
  };
  return (
    <section className='homeSlider'>
      <Slider {...settings} className="homeslidermain">
        <div className="contains">
          <div className="image-content">
            <img src={pic7} className='imgset' alt="Descriptive text" />
            <div className="info">
              <h1 className="mb-4">
                Affordable Books &<br/>
                Endless Knowledge.
              </h1>
              <p>Find the books you need at prices you can afford. Buy, </p>
              <p> return, and share the love of learning with others.</p>
            </div>
          </div>
        </div>
        <div className="contains2">
          <div className="image-content">
            <img src={pic8} className='imgset' alt="Descriptive text" />
            <div className="info1">
              <h1 className="mb-4">
              From Students, For Students or<br/>
              From Seniors, For Juniors.
              </h1>
              <p>Our books have been passed down by fellow students,ensuring</p>
              <p>affordability and quality. Let's keep the cycle going!</p>
            </div>
          </div>
        </div>
        <div className="contains3">
          <div className="image-content">
            <img src={pic6} className='imgset' alt="Descriptive text" />
            <div className="info2">
              <h1 className="mb-4">
              Save Money, Save the Planet <br/>
               As No other planet to go for.
              </h1>
              <p>Every book you buy and return helps reduce waste.  </p>
              <p> Join our community of eco-conscious learners.</p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  )
}

export default Homeslider;
