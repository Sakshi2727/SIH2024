import React, { useEffect } from "react";
import Slider from "react-slick";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaGoogle } from 'react-icons/fa';

const testimonialData = [
  {
    id: 1,
    name: "Sakshi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Dhruv",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Param",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-18 bg-[#F0FFFF]">
      <div className="container mx-auto">
        <div className="text-center mb-15 max-w-[700px] mx-auto">
          <p className="text-lg text-blue-600 bg-clip-text bg-gradient-to-r from-primary to-secondary">
            What our customers say
          </p>
          <h1 className="text-4xl font-bold text-black">Testimonial</h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="max-w-[900px] mx-auto"
        >
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className="my-8" key={data.id}>
                <div className="flex flex-col gap-6 shadow-lg py-10 px-8 mx-4 rounded-xl bg-white relative">
                  <div className="flex justify-center">
                    <img
                      className="rounded-full w-24 h-24"
                      src={data.img}
                      alt={data.name}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-700 mb-4">{data.text}</p>
                    <h1 className="text-2xl font-bold text-black">{data.name}</h1>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>



      {/*Testimonials */}
      <div className="bg-blue-600 text-white py-10 mt-12 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-4">Buy, Sell, Donate, or Borrow Books from Us</h2>
            <p className="text-lg">"A room without books is like a body without a soul."</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded">
              Donate Now
            </button>
            <button className="bg-white hover:bg-gray-200 text-blue-800 font-bold py-3 px-8 rounded flex items-center">
              <FaGoogle className="mr-2" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;



