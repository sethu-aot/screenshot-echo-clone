
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HackerFigure from "../components/HackerFigure";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  return (
    <div className="min-h-screen bg-hackerDark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full z-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 800 800%22%3E%3Cg fill=%22none%22 stroke=%22rgba(163, 255, 0, 0.15)%22 stroke-width=%221%22%3E%3Ccircle cx=%22400%22 cy=%22400%22 r=%22250%22/%3E%3Ccircle cx=%22400%22 cy=%22400%22 r=%22200%22/%3E%3Ccircle cx=%22400%22 cy=%22400%22 r=%22150%22/%3E%3Ccircle cx=%22400%22 cy=%22400%22 r=%22300%22/%3E%3Ccircle cx=%22400%22 cy=%22400%22 r=%22350%22/%3E%3C/g%3E%3C/svg%3E')]" style={{ opacity: 0.7 }}></div>
      </div>
      <Navbar />
      <div className={`relative z-20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
      </div>
      <HackerFigure />
    </div>
  );
};

export default Index;
