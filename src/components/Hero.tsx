
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 }
  })
};

const Hero = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 flex flex-col justify-center circuit-bg">
      <motion.div 
        className="max-w-4xl z-10 relative mt-16"
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-montserrat text-3xl md:text-4xl lg:text-7xl font-bold mb-2 text-white tracking-wider"
          variants={textVariants}
          custom={0}
        >
          <span className="text-xl md:text-2xl block mb-2 tracking-[0.5em]">E T H I C A L</span>
          <span className="text-white text-7xl md:text-8xl lg:text-9xl leading-none">HACK<span className="text-hackerGreen">ING</span></span>
        </motion.h1>
        
        <motion.p 
          className="text-xs md:text-sm font-mono text-gray-400 mt-6 max-w-lg leading-relaxed"
          variants={textVariants}
          custom={1}
        >
          ALSO REFERRED TO AS A WHITE HAT HACKER, IS AN INFORMATION SECURITY EXPERT WHO SYSTEMATICALLY 
          ATTEMPTS TO PENETRATE A COMPUTER SYSTEM, NETWORK, APPLICATION, OR OTHER COMPUTING RESOURCE ON BEHALF 
          OF ITS OWNERS -- AND WITH THEIR PERMISSION -- TO FIND SECURITY VULNERABILITIES THAT A MALICIOUS HACKER 
          COULD POTENTIALLY EXPLOIT.
        </motion.p>

        <motion.div 
          className="mt-12"
          variants={textVariants}
          custom={2}
        >
          <Link 
            to="/join" 
            className="border border-hackerGreen text-hackerGreen px-8 py-3 font-mono uppercase tracking-wider hover:bg-hackerGreen hover:bg-opacity-20 transition-all duration-300 inline-flex items-center group"
          >
            BECOME ONE OF US
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
