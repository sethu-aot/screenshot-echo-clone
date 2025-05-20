
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <div className="w-12 h-12 relative flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-hackerGreen rounded-full flex items-center justify-center animate-pulse-green">
          <div className="w-7 h-5 bg-transparent border-2 border-hackerGreen rounded-t-full relative">
            <div className="absolute w-1 h-1 bg-hackerGreen rounded-full top-1 left-1"></div>
            <div className="absolute w-1 h-1 bg-hackerGreen rounded-full top-1 right-1"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
