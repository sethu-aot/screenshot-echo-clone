
const HackerFigure = () => {
  return (
    <div className="absolute z-20 top-0 left-0 w-full h-full pointer-events-none flex justify-center">
      <div className="relative w-full max-w-5xl mx-auto">
        <img 
          src="/lovable-uploads/1b25e2ec-03bb-4c8f-b35f-61bbfd9cdd05.png" 
          alt="Anonymous hacker with hoodie in the dark" 
          className="w-full h-auto object-contain"
          style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -40%)"
          }}
        />
      </div>
    </div>
  );
};

export default HackerFigure;
