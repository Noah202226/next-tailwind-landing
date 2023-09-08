"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    //   Nav
    <nav className="relative container mx-auto p-6 ">
      {/* fLex */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src="/img/logo.svg" alt="logo" />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="hover:text-white hover:bg-red-500 hover:rounded-full p-2"
          >
            Products
          </a>
          <a
            href="#"
            className="hover:text-white hover:bg-red-500 hover:rounded-full p-2"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-white hover:bg-red-500 hover:rounded-full p-2"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-white hover:bg-red-500 hover:rounded-full p-2"
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-white hover:bg-red-500 hover:rounded-full p-2"
          >
            Community
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="hidden md:block p-3 px6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400"
        >
          Get started
        </a>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className={`${
            menuOpen ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
          onClick={() => toggleMenu()}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
