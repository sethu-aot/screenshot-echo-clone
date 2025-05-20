
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navItems = [
    { text: "ABOUT US", path: "/about" },
    { text: "EVENTS", path: "/events" },
    { text: "TEAM", path: "/team" },
    { text: "PHILOSOPHY", path: "/philosophy" },
    { text: "RULES", path: "/rules" },
    { text: "CONTACTS", path: "/contacts" },
  ];

  return (
    <header className="w-full py-5 px-6 md:px-12 lg:px-24 flex items-center justify-between fixed top-0 z-50 bg-transparent">
      <nav className="hidden md:flex items-center space-x-10">
        {navItems.slice(0, 3).map((item) => (
          <Link
            key={item.text}
            to={item.path}
            className="text-white text-sm font-montserrat tracking-wider hover:text-hackerGreen transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </nav>

      <div className="flex md:absolute md:left-1/2 md:-translate-x-1/2">
        <Logo />
      </div>

      <nav className="hidden md:flex items-center space-x-10">
        {navItems.slice(3).map((item) => (
          <Link
            key={item.text}
            to={item.path}
            className="text-white text-sm font-montserrat tracking-wider hover:text-hackerGreen transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button className="text-white hover:text-hackerGreen">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
