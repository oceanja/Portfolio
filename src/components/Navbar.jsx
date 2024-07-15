import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items" style={{ color: "#66FCF1" }}>Portfolio</div>
        <div className="right">
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <div className={`nav_links ${isOpen ? "open" : ""}`}>
            <a href="#home" className="nav_items" onClick={handleNavClick}>Home</a>
            <a href="#codingProfile" className="nav_items" onClick={handleNavClick}>Coding Profiles</a>
            <a href="#skills" className="nav_items" onClick={handleNavClick}>Skills</a>
            <a href="#projects" className="nav_items" onClick={handleNavClick}>Projects</a>
            <a href="#contact" className="nav_items" onClick={handleNavClick}>Contact</a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`side-popup ${isOpen ? "open" : ""}`}>
          <div className="nav_items" onClick={handleNavClick}>
            <a href="#home">Home</a>
          </div>
          <div className="nav_items" onClick={handleNavClick}>
            <a href="#codingProfile">Coding Profiles</a>
          </div>
          <div className="nav_items" onClick={handleNavClick}>
            <a href="#skills">Skills</a>
          </div>
          <div className="nav_items" onClick={handleNavClick}>
            <a href="#projects">Projects</a>
          </div>
          <div className="nav_items" onClick={handleNavClick}>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
