import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
     {/* Logo */}
<Link
  to="/"
  onClick={scrollToTop}
  className="flex items-center"
>
  <img
    src="https://res.cloudinary.com/deyfsl3w8/image/upload/v1781027902/logo_skill_oudfjs.jpg"
    alt="Skill Revolution Logo"
    className="h-18 w-auto object-contain"
  />
</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/placements">Placements</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</Link></li>
            <li><Link to="/placements" onClick={() => setMenuOpen(false)}>Placements</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}