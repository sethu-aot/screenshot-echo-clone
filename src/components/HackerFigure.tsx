
import { useEffect, useState } from 'react';

const HackerFigure = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="absolute z-30 w-full h-full pointer-events-none">
      <div className="relative w-full h-full">
        <img 
          src="/lovable-uploads/1b25e2ec-03bb-4c8f-b35f-61bbfd9cdd05.png" 
          alt="Anonymous hacker with hoodie in the dark" 
          className={`absolute w-auto h-[85vh] object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error("Failed to load hacker image");
            setIsLoaded(false);
          }}
          style={{ 
            right: "0",
            bottom: "0",
            transform: "translateY(-5%)"
          }}
        />
      </div>
    </div>
  );
};

export default HackerFigure;
