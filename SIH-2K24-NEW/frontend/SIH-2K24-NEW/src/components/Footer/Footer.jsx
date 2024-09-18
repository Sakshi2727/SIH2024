import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlay, FaApple } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import GranthSetu from "../../assets/GranthSetu.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-10">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-10"> {/* Adjusted margin-bottom */}
            <img src={GranthSetu} alt="GranthSetu" className="h-20 mb-6" />
            <p className="text-sm">
              Ever wanted to buy a book but couldn't because it was too expensive? Worry not! GranthSetu is here! These days in the news, GranthSetu is being called the Robinhood of the world of books.
            </p>
            <div className="flex mt-6 space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff914d]">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff914d]">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#ff914d]">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Our Links */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0 mb-10"> {/* Adjusted margin-top */}
            <h4 className="text-lg font-semibold mb-4">Our Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-[#ff914d]">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-[#ff914d]">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/blogs" className="hover:text-[#ff914d]">Blogs</a>
              </li>
              <li className="mb-2">
                <a href="/sell" className="hover:text-[#ff914d]">Sell with Us</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/track-order" className="hover:text-[#ff914d]">Track Order</a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="hover:text-[#ff914d]">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:text-[#ff914d]">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:text-[#ff914d]">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Support and App Downloads */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <p className="flex items-center mb-2">
              <AiOutlinePhone className="mr-2" />
              Call: 12345 67890
            </p>
            <p className="flex items-center mb-4">
              <AiOutlineMail className="mr-2" />
              Email: example@granthsetu.com
            </p>
            <h4 className="text-lg font-semibold mb-2">Download Mobile App</h4>
            <div className="flex space-x-4">
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ff914d]">
                <FaGooglePlay size={30} />
                <span className="ml-2">Google Play</span>
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#ff914d]">
                <FaApple size={30} />
                <span className="ml-2">App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Raise a Complaint */}
        <div className="mt-10">
          <h4 className="text-lg font-semibold mb-4">Raise a Complaint</h4>
          <form className="flex flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Enter your complaint"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#ff914d] text-white rounded-md hover:bg-[#e67e2f] transition duration-300"
            >
              Enter
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 GranthSetu, All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-[#ff914d]">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#ff914d]">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
