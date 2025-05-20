
import Navbar from "../components/Navbar";

const Rules = () => {
  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-6">RULES</h1>
        
        <div className="max-w-3xl">
          <p className="text-gray-300 mb-6 font-mono">
            Our ethical hackers adhere to these strict rules of engagement:
          </p>
          
          <ol className="space-y-6">
            <li className="border-l-2 border-hackerGreen pl-4">
              <h3 className="text-hackerGreen font-bold text-lg">Written Permission</h3>
              <p className="text-gray-300 text-sm font-mono mt-1">Never test a system without explicit written authorization from the owner.</p>
            </li>
            
            <li className="border-l-2 border-hackerGreen pl-4">
              <h3 className="text-hackerGreen font-bold text-lg">Scope Adherence</h3>
              <p className="text-gray-300 text-sm font-mono mt-1">Stay strictly within the defined scope of the engagement.</p>
            </li>
            
            <li className="border-l-2 border-hackerGreen pl-4">
              <h3 className="text-hackerGreen font-bold text-lg">Data Protection</h3>
              <p className="text-gray-300 text-sm font-mono mt-1">Never extract, modify, or destroy data unless explicitly permitted.</p>
            </li>
            
            <li className="border-l-2 border-hackerGreen pl-4">
              <h3 className="text-hackerGreen font-bold text-lg">Confidentiality</h3>
              <p className="text-gray-300 text-sm font-mono mt-1">All findings remain strictly confidential between us and the client.</p>
            </li>
            
            <li className="border-l-2 border-hackerGreen pl-4">
              <h3 className="text-hackerGreen font-bold text-lg">Responsible Disclosure</h3>
              <p className="text-gray-300 text-sm font-mono mt-1">Allow reasonable time for vulnerability remediation before any public disclosure.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Rules;
