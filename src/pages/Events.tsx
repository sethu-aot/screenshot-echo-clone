
import Navbar from "../components/Navbar";

const Events = () => {
  const events = [
    { 
      title: "CyberSecurity Summit 2025", 
      date: "June 15-17, 2025",
      description: "Join us for the annual cybersecurity conference featuring workshops on the latest ethical hacking techniques." 
    },
    { 
      title: "Capture The Flag Competition", 
      date: "August 22-23, 2025",
      description: "Test your skills in our CTF event with prizes for top performers." 
    },
    { 
      title: "Ethical Hacking Workshop", 
      date: "September 10, 2025",
      description: "Hands-on training for beginners looking to start in the field of ethical hacking." 
    }
  ];

  return (
    <div className="min-h-screen bg-hackerDark text-white">
      <Navbar />
      <div className="pt-24 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold mb-6">EVENTS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="border border-hackerGreen border-opacity-30 p-6 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
            >
              <h3 className="text-hackerGreen font-bold text-xl mb-2">{event.title}</h3>
              <p className="text-gray-400 text-sm mb-2 font-mono">{event.date}</p>
              <p className="text-gray-300 font-mono text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
