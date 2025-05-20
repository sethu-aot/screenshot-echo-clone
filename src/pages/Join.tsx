
import Navbar from "../components/Navbar";
import { useState } from "react";
import { toast } from "sonner";

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skills: "",
    experience: "",
    motivation: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      skills: "",
      experience: "",
      motivation: ""
    });
  };

  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24 pb-16">
        <h1 className="text-4xl font-bold mb-2">BECOME ONE OF US</h1>
        <p className="text-hackerGreen font-mono mb-10">Join our team of ethical hackers</p>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm text-gray-400 mb-1 font-mono">FULL NAME</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-50 border border-gray-700 px-4 py-2 text-white font-mono focus:border-hackerGreen focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1 font-mono">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-50 border border-gray-700 px-4 py-2 text-white font-mono focus:border-hackerGreen focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="skills" className="block text-sm text-gray-400 mb-1 font-mono">PRIMARY SKILLS</label>
              <select
                id="skills" 
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full bg-black bg-opacity-50 border border-gray-700 px-4 py-2 text-white font-mono focus:border-hackerGreen focus:outline-none"
                required
              >
                <option value="">Select your primary skill</option>
                <option value="penetration-testing">Penetration Testing</option>
                <option value="web-app-security">Web Application Security</option>
                <option value="network-security">Network Security</option>
                <option value="reverse-engineering">Reverse Engineering</option>
                <option value="social-engineering">Social Engineering</option>
                <option value="cryptography">Cryptography</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm text-gray-400 mb-1 font-mono">YEARS OF EXPERIENCE</label>
              <input 
                type="number" 
                id="experience" 
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                min="0"
                max="50"
                className="w-full bg-black bg-opacity-50 border border-gray-700 px-4 py-2 text-white font-mono focus:border-hackerGreen focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="motivation" className="block text-sm text-gray-400 mb-1 font-mono">WHY DO YOU WANT TO JOIN US?</label>
              <textarea 
                id="motivation" 
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black bg-opacity-50 border border-gray-700 px-4 py-2 text-white font-mono focus:border-hackerGreen focus:outline-none"
                required
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="primary-button"
              >
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
