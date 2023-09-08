import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      {/* Flex container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023, All Right Reserved
          </div>
          {/* Logo */}
          <div id="logo">
            <img src="/img/logo-white.svg" alt="footer-logo" />
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-4">
            {/* Link */}
            <a href="">
              <img src="/img/icon-facebook.svg" alt="fb-logo" className="h-8" />
            </a>
            <a href="">
              <img src="/img/icon-youtube.svg" alt="fb-logo" className="h-8" />
            </a>
            <a href="">
              <img src="/img/icon-twitter.svg" alt="fb-logo" className="h-8" />
            </a>
            <a href="">
              <img
                src="/img/icon-pinterest.svg"
                alt="fb-logo"
                className="h-8"
              />
            </a>
            <a href="">
              <img
                src="/img/icon-instagram.svg"
                alt="fb-logo"
                className="h-8"
              />
            </a>
          </div>
        </div>

        {/* List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-red-500">
              Home
            </a>
            <a href="#" className="hover:text-red-500">
              Pricing
            </a>
            <a href="#" className="hover:text-red-500">
              Products
            </a>
            <a href="#" className="hover:text-red-500">
              About
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-red-500">
              Careers
            </a>
            <a href="#" className="hover:text-red-500">
              Community
            </a>
            <a href="#" className="hover:text-red-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500">
              About
            </a>
          </div>
        </div>

        {/* Input container */}
        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex flex-1 px-4 rounded-full focus:outline"
                placeholder="Update your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-600 focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2023, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
