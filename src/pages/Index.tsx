
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HackerFigure from "../components/HackerFigure";

const Index = () => {
  return (
    <div className="min-h-screen bg-hackerDark text-white overflow-hidden relative">
      <Navbar />
      <div className="relative z-10">
        <Hero />
      </div>
      <HackerFigure />
    </div>
  );
};

export default Index;
