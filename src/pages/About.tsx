
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-6">ABOUT US</h1>
        <div className="max-w-3xl">
          <p className="text-gray-300 mb-4 font-mono">
            Our team consists of certified ethical hackers with years of experience in cybersecurity and penetration testing.
          </p>
          <p className="text-gray-300 mb-4 font-mono">
            We help organizations identify and fix vulnerabilities before malicious actors can exploit them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
