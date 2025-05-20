
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 flex flex-col justify-center circuit-bg">
      <div className="max-w-4xl z-10 relative">
        <h1 className="font-montserrat text-3xl md:text-4xl lg:text-7xl font-bold mb-2 text-white tracking-wider">
          <span className="text-xl md:text-2xl block mb-2">E T H I C A L</span>
          <span className="text-white">HACK<span className="text-hackerGreen">ING</span></span>
        </h1>
        
        <p className="text-xs md:text-sm font-mono text-gray-400 mt-6 max-w-xl leading-relaxed">
          ALSO REFERRED TO AS A WHITE HAT HACKER, IS AN INFORMATION SECURITY EXPERT WHO SYSTEMATICALLY 
          ATTEMPTS TO PENETRATE A COMPUTER SYSTEM, NETWORK, APPLICATION, OR OTHER COMPUTING RESOURCE ON BEHALF 
          OF ITS OWNERS -- AND WITH THEIR PERMISSION -- TO FIND SECURITY VULNERABILITIES THAT A MALICIOUS HACKER 
          COULD POTENTIALLY EXPLOIT.
        </p>

        <div className="mt-12">
          <Link 
            to="/join" 
            className="primary-button inline-flex items-center group"
          >
            BECOME ONE OF US
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
