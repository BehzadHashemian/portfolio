import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 md:px-8 lg:px-16 py-6 md:py-10 lg:py-12">
      <div className="flex item-center text-xl justify-between">
        <div className="hidden lg:block py-3 font-bold text-2xl">Sayyedbehzad Hashemian</div>
        <div className="flex py-3">
          <a className="px-3 lg:px-5" href="/">Home</a>
          <a className="px-3 lg:px-5" href="/Project">Project</a>
          <a className="px-3 lg:px-5" href="/About">About</a>
        </div>
        <div className="text-black text-xl font-bold px-6 py-4 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500 shadow-lg hover:scale-105 
                     transition-transform duration-300">contact me</div>
      </div>
    </nav>
  );
};

export default Navbar;
