
import Navbar from "../components/Navbar";
import { useState } from "react";
import { toast } from "sonner";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-6">CONTACTS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-5xl">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-hackerGreen">Get In Touch</h2>
            <p className="text-gray-300 mb-6 font-mono">
              For inquiries about our ethical hacking services, please use the secure form or contact methods below.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center border border-hackerGreen mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hackerGreen" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">EMAIL</p>
                  <p className="text-white font-mono">secure@ethicalhackers.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center border border-hackerGreen mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hackerGreen" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54.999l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">PHONE</p>
                  <p className="text-white font-mono">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1 font-mono">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
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
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1 font-mono">MESSAGE</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-black bg-opacity-50 border border-gray-700 px-4 py-2 text-white font-mono focus:border-hackerGreen focus:outline-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="primary-button"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
