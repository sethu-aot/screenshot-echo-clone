
import Navbar from "../components/Navbar";

const Team = () => {
  const team = [
    {
      name: "Ghost",
      role: "Lead Security Researcher",
      speciality: "Network Penetration"
    },
    {
      name: "Cipher",
      role: "Forensics Specialist",
      speciality: "Digital Evidence Analysis"
    },
    {
      name: "Phantom",
      role: "Web Application Tester",
      speciality: "SQL Injection, XSS"
    },
    {
      name: "Shadow",
      role: "Reverse Engineer",
      speciality: "Malware Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-6">TEAM</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="border border-hackerGreen border-opacity-20 p-6 bg-black bg-opacity-40 hover:border-opacity-50 transition-all duration-300"
            >
              <h3 className="text-hackerGreen font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-gray-300 text-sm font-mono">{member.role}</p>
              <p className="text-gray-400 text-xs mt-2 font-mono">Speciality: {member.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
