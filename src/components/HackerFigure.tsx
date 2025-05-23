
import { useEffect, useState } from 'react';

const HackerFigure = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="absolute z-[999] w-full h-full pointer-events-none">
      <div className="relative w-full h-full">
        <img 
          src="/lovable-uploads/hackers.png" 
          alt="Anonymous hacker with hoodie in the dark" 
          className={`absolute w-auto h-[110vh] object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error("Failed to load hacker image");
            setIsLoaded(false);
          }}
          style={{
            right: "6%",
            bottom: "-3%",
            transform: "translateY(0%)"
          }}
        />
      </div>
    </div>
  );
};

export default HackerFigure;
