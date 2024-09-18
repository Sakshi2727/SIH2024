import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { GiTwoCoins } from "react-icons/gi";
import GranthSetu from "../../assets/GranthSetu.png";
import './Navbar.css';
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const toggleBooksDropdown = () => {
    setIsBooksOpen(!isBooksOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserOpen(!isUserOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={GranthSetu} alt="logo" className="h-16 w-16 mr-3" />
          <span className="font-lobster-regular text-3xl text-[#004aad]">
            GranthSetu
          </span>
        </div>

        {/* Middle: Navigation Links and Search Bar */}
        <div className="flex items-center space-x-4">
          <Link className="text-gray-700 hover:text-[#ff914d]" to="/">Home</Link>
          
          {/* Books Dropdown */}
          <div className="relative">
            <button
              onClick={toggleBooksDropdown}
              className="text-gray-700 hover:text-[#ff914d] focus:outline-none"
            >
              Books
            </button>
            {isBooksOpen && (
              <div className="absolute right-0 top-full bg-white shadow-lg mt-2 z-10 w-48 shadow-[#f0ffff]">
                <div className="flex flex-col p-4">
                    <h4 className="font-bold text-center mb-3">Academic & Professional</h4>
                    <a href="#" className="hover:text-[#ff914d]">Engineering</a>
                    <a href="#" className="hover:text-[#ff914d]">Medical</a>
                    <a href="#" className="hover:text-[#ff914d]">Arts</a>
                    <a href="#" className="hover:text-[#ff914d]">Novel</a>
                    <a href="#" className="hover:text-[#ff914d]">For Kids</a>
                    <a href="#" className="hover:text-[#ff914d]">Others</a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 hover:text-[#ff914d]">About</a>
          <Link  className="text-gray-700 hover:text-[#ff914d]" to="/showbooks">
          Request a book
          </Link>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Title, Author, Publisher or ISBN"
              className="border-2 border-[#004aad] rounded-full px-4 py-2 w-96 focus:outline-none"
            />
            <button className="text-[#004aad] p-3 rounded-r-full">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right: Account Dropdown, Gold Coins, Donate Button, Cart Icon */}
        <div className="flex space-x-4 items-center">
          {/* Gold Coins */}
          <a href="#" className="coin-link">
            <GiTwoCoins className="gold-coin text-yellow-400 text-3xl" />
          </a>

          {/* Donate Button */}
        <Link className="bg-green-500 text-white py-2 px-4 rounded" to="sellBook">
        Sell Now
        </Link>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="text-[#004aad] hover:text-[#ff914d] focus:outline-none"
            >
              <FaUser />
            </button>
            {isUserOpen && (
              <div className="absolute right-0 top-full bg-white shadow-lg mt-2 z-10 w-48 shadow-[#f0ffff]">
                <div className="flex flex-col p-4">
                  <button className="bg-[#004aad] text-white py-3 px-6 mb-3 rounded-full">Log in</button>
                  <a href="#" className="text-[#004aad] hover:text-[#ff914d] mb-2">New to GranthSetu? Sign up</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Account</a>
                  <a href="#" className="hover:text-[#ff914d]">Personal Settings</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Orders</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Wishlist</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Gift Certificate</a>
                  <a href="#" className="hover:text-[#ff914d]">Your Addresses</a>
                  <a href="#" className="hover:text-[#ff914d]">Change Password</a>
                </div>
              </div>
            )}
          </div>

          <FaShoppingCart className="text-[#ff914d]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
