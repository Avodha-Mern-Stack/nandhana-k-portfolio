import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenu(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MyPortfolio</div>

      <ul className="nav-menu">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About Me" },
          { id: "services", label: "Services" },
          { id: "work", label: "Portfolio" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id} onClick={() => scrollToSection(item.id)}>
            <p>{item.label}</p>
            <span className={`underline ${menu === item.id ? "active" : ""}`} />
          </li>
        ))}
      </ul>

      <button
        className="nav-connect"
        onClick={() => scrollToSection("contact")}
      >
        Connect with me
      </button>
    </nav>
  );
};

export default Navbar;
