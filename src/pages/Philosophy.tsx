
import Navbar from "../components/Navbar";

const Philosophy = () => {
  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-6">PHILOSOPHY</h1>
        
        <div className="max-w-3xl">
          <p className="text-gray-300 mb-6 font-mono">
            We believe in using our technical knowledge to help secure systems, not exploit them. Our core philosophy centers around:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-hackerGreen mr-2">&gt;</span>
              <div>
                <h3 className="text-white font-bold">Responsibility</h3>
                <p className="text-gray-400 text-sm font-mono">Using our skills to protect, not harm. We follow strict ethical guidelines in all our work.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="text-hackerGreen mr-2">&gt;</span>
              <div>
                <h3 className="text-white font-bold">Transparency</h3>
                <p className="text-gray-400 text-sm font-mono">Open communication with clients about vulnerabilities and remediation strategies.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="text-hackerGreen mr-2">&gt;</span>
              <div>
                <h3 className="text-white font-bold">Education</h3>
                <p className="text-gray-400 text-sm font-mono">Sharing knowledge to improve security awareness throughout the industry.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="text-hackerGreen mr-2">&gt;</span>
              <div>
                <h3 className="text-white font-bold">Continuous Learning</h3>
                <p className="text-gray-400 text-sm font-mono">Constantly updating our skills to keep pace with evolving threats.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
