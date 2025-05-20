
const HackerFigure = () => {
  return (
    <div className="absolute z-30 w-full h-full pointer-events-none">
      <div className="relative w-full h-full">
        <img 
          src="/lovable-uploads/1b25e2ec-03bb-4c8f-b35f-61bbfd9cdd05.png" 
          alt="Anonymous hacker with hoodie in the dark" 
          className="absolute w-auto h-[85vh] object-contain"
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
