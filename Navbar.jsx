// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white font-bold px-2 py-1 rounded">GN</div>
          <span className="font-semibold text-gray-800">Guardian Network</span>
        </div>

        {/* Menu */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>

          {/* Connect scrolls down */}
          <ScrollLink 
            to="connect" 
            smooth={true} 
            duration={600} 
            offset={-80} 
            className="cursor-pointer text-gray-600 hover:text-blue-600"
          >
            Connect
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
