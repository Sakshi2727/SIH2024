import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Book1 from "../../assets/books/sihbook1.jpg";
import Book2 from "../../assets/books/sihbook2.jpg";
import Book3 from "../../assets/books/sihbook3.jpg";
import Book4 from "../../assets/books/sihbook4.jpg";
import Book5 from "../../assets/books/sihbook5.jpg";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './Books.css'; 

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Computer System Architecture",
    rating: 5.0,
    author: "By M.Morris Mano",
    price: 300,
  },
  {
    id: 2,
    img: Book2,
    title: "Database Management System",
    rating: 4.5,
    author: "By A.A.Puntambekar",
    price: 350,
  },
  {
    id: 3,
    img: Book3,
    title: "Discrete Maths",
    rating: 4.7,
    author: "By Kenneth H Rosen",
    price: 250,
  },
  {
    id: 4,
    img: Book4,
    title: "Computer Networking",
    rating: 4.4,
    author: "By Abhishek Jaguessar",
    price: 320,
  },
  {
    id: 5,
    img: Book5,
    title: "General Medicine",
    rating: 4.5,
    author: "By Neeraj Mahajan",
    price: 280,
  },
];

const Books = () => {
  useEffect(() => {
    const handleScroll = () => {
      const curvyLine = document.querySelector(".curvy-line");
      const trendingBooksSection = document.querySelector(".trending-books");
      const rect = trendingBooksSection.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        curvyLine.classList.add("visible");
      } else {
        curvyLine.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-2 text-black cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight size={30} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-1 text-black cursor-pointer z-10 x-20 y-7"
      onClick={onClick}
    >
      <FaChevronLeft size={30} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center books-bg">
      <div className="container py-14 relative">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto trending-books">
  <h1 className="big relative inline-block font-suse-bold">
    Trending <span className="underlined scroll-animate">Books</span>
  </h1>
</div>


        {/* Slider Section */}
        <Slider {...settings}>
          {booksData.map(({ id, img, title, rating, author, price }) => (
            <div key={id} className="p-10">
              <div
                className="space-y-4 p-3 bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-[#004aad] transition-shadow duration-300"
                style={{ width: "300px" }} // Adjusted width for the book cover
              >
                <img
                  src={img}
                  alt={title}
                  className="h-[240px] w-[185px] rounded-xl object-cover rounded-md mx-auto"
                />
                <div className="text-black text-center">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700">{author}</p>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{rating}</span>
                  </div>
                  <div className="text-lg font-bold">Rs. {price}</div>
                  {/* Add to Cart Button */}
                  <button className="mt-3 bg-[#ff914d] text-white py-1 px-4 rounded-md hover:bg-[#e67b38] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View All Books Button */}
        <div className="flex justify-center mt-10">
          <button className="text-center cursor-pointer bg-[#004aad] text-white py-2 px-6 rounded-md hover:bg-[#003a8c] transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
