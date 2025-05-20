
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HackerFigure from "../components/HackerFigure";

const Index = () => {
  return (
    <div className="min-h-screen bg-hackerDark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <Navbar />
      <div className="relative z-10">
        <Hero />
      </div>
      <HackerFigure />
    </div>
  );
};

export default Index;
