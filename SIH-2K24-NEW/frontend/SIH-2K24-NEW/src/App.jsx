import React from 'react';
import Home from './components/Home'
import Showbooks from './components/showbookss/Showbooks'
import Navbar from './components/Navbar/Navbar';
import SellBook from './components/sellbookss/SellBook'
import Books from './components/BookSlider/Books';
import Books2 from './components/Books2/Books2';
import Testimonial from './components/Testimonial/Testimonial';
import Footer  from './components/Footer/Footer';
import AutoPanel from './components/AutoPanel/AutoPanel';
import Slider from './components/Slider/Slider'
import './stylese/custom-styles.css';


import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/showbooks" element={<Showbooks/>}/>
        <Route exact path="/sellbook" element={<SellBook/>}/>
      </Routes>
    </Router>
  );
};

export default App;

