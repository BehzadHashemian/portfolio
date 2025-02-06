import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
      <div className="flex item-center text-sm md:text-xl lg:text-xl justify-between">
        <div className="hidden lg:block py-3 font-bold text-2xl flex-1">Sayyedbehzad Hashemian</div>
        <div className="flex py-3 flex-1 lg:justify-center items-center">
          <a className="px-3 lg:px-5 hover:scale-105 transition-transform duration-300" href="#home">Home</a>
          <a className="px-3 lg:px-5 hover:scale-105 transition-transform duration-300" href="#skills">skills</a>
          <a className="px-3 lg:px-5 hover:scale-105 transition-transform duration-300" href="#project">Project</a>
          <a className="px-3 lg:px-5 hover:scale-105 transition-transform duration-300" href="#about">About</a>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <button className="text-black lg:text-xl text-sm font-bold px-6 py-4 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500 shadow-lg hover:scale-105 
                     transition-transform duration-300">contact me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
