
const HackerFigure = () => {
  return (
    <div className="absolute z-0 top-1/2 left-1/2 transform -translate-y-1/2 opacity-90 flex justify-center items-center w-full h-full pointer-events-none">
      <div className="relative w-full max-w-3xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Anonymous hacker with hoodie" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HackerFigure;
