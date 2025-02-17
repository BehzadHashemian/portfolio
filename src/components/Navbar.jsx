import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-black/50 text-white px-4 md:px-8 lg:px-16 py-4 md:py-2 lg:py-4 backdrop-blur-md">
      <div className="flex item-center text-sm md:text-xl lg:text-xl justify-between">
        <div className="hidden lg:block py-3 font-bold text-2xl flex-1">Behzad Hashemian</div>
        <div className="flex py-3 flex-1 lg:justify-center items-center">
          <a className="px-2 lg:px-5 hover:scale-105 transition-transform duration-300" href="#home">Home</a>
          <a className="px-2 lg:px-5 hover:scale-105 transition-transform duration-300" href="#skills">skills</a>
          <a className="px-2 lg:px-5 hover:scale-105 transition-transform duration-300" href="#project">Project</a>
          <a className="px-2 lg:px-5 hover:scale-105 transition-transform duration-300" href="#about">About</a>
        </div>
        <div className="flex-1 flex justify-end items-center">
        <a href="mailto:behzad.hashemian97@gmail.com" className="text-black lg:text-xl md:text-lg text-sm font-bold px-4 py-3 md:px-5 md:py-3 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500 shadow-lg hover:scale-105 
                     transition-transform duration-300">contact me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
