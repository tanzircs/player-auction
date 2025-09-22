import navImg from "../assets/logo.png";
import dollarImg from "../assets/dollar-1.png";

import React from 'react';

const NavBar = () => {
    return (
      <div>
        <div className="navbar max-w-[1280px] mx-auto">
          <div className="flex-1">
            <img className="w-15 h-15" src={navImg} alt="" />
          </div>
          <div className="flex items-center space-x-1">
            <img src={dollarImg} alt="" />
            <span>60000</span>
            <span>coin</span>
          </div>
        </div>
        
      </div>
    );
};

export default NavBar;
