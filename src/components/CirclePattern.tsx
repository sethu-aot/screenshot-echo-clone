import React from 'react';

export const CirclePattern: React.FC = () => {
  return (
    <div className="relative w-96 h-96 opacity-60">
      <svg  
        viewBox="0 0 200 200"  
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-spin-slow"
      > 
        <g fill="none" stroke="#c1ff00" strokeWidth="0.5"> 
          <circle cx="100" cy="100" r="90" /> 
          <circle cx="100" cy="100" r="80" /> 
          <circle cx="100" cy="100" r="70" /> 
          <circle cx="100" cy="100" r="60" /> 
          <circle cx="100" cy="100" r="50" /> 
          <circle cx="100" cy="100" r="40" /> 
           
          {/* Cross lines */} 
          <line x1="10" y1="100" x2="190" y2="100" /> 
          <line x1="100" y1="10" x2="100" y2="190" /> 
           
          {/* Diagonal lines */} 
          <line x1="30" y1="30" x2="170" y2="170" /> 
          <line x1="170" y1="30" x2="30" y2="170" /> 
           
          {/* Technical details */} 
          {[...Array(10)].map((_, i) => ( 
            <rect  
              key={i}  
              x={85 + (i * 3)}  
              y="25"  
              width="2"  
              height="2"  
              fill="#c1ff00"  
              stroke="none" 
            /> 
          ))} 
           
          {[...Array(8)].map((_, i) => ( 
            <React.Fragment key={i}> 
              <text  
                x={110 + (i * 10)}  
                y={50 + (i * 5)}  
                fill="#c1ff00"  
                fontSize="3" 
                className="font-mono" 
              > 
                {i}1{i*2} 
              </text> 
              <text  
                x={60 - (i * 10)}  
                y={120 + (i * 5)}  
                fill="#c1ff00"  
                fontSize="3" 
                className="font-mono" 
              > 
                {i}0{i*3} 
              </text> 
            </React.Fragment> 
          ))} 
           
          {/* Hash marks */} 
          {[...Array(36)].map((_, i) => ( 
            <line  
              key={i}  
              x1={100 + 90 * Math.cos(i * 10 * Math.PI / 180)}  
              y1={100 + 90 * Math.sin(i * 10 * Math.PI / 180)}  
              x2={100 + 80 * Math.cos(i * 10 * Math.PI / 180)}  
              y2={100 + 80 * Math.sin(i * 10 * Math.PI / 180)}  
            /> 
          ))} 
        </g> 
      </svg> 
    </div> 
  ); 
};