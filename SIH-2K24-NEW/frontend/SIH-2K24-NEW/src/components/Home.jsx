import React from 'react'
import Navbar from './Navbar/Navbar';
import Books from './BookSlider/Books';
import Books2 from './Books2/Books2';
import Testimonial from './Testimonial/Testimonial';
import Footer  from './Footer/Footer';
import AutoPanel from './AutoPanel/AutoPanel';
import Slider from './Slider/Slider'
import '../stylese/custom-styles.css';
const Home = () => {
  return (
    <section>
      <Navbar />
      <Slider />
      
      <hr className="hr-13" />
      <Books />
      <hr className="hr-13" />
      <AutoPanel />
      <hr className="hr-13" />
      <Books2 />
      <hr className="hr-13" />
      <Testimonial />
      <hr className="hr-13" />
      <Footer />
    </section>
  )
}

export default Home
