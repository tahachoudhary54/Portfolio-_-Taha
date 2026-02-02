"use client";

import { useState, useEffect } from "react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Set page title safely (App Router + Client Component)
  useEffect(() => {
    document.title = "Taha Choudhary - Portfolio";
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      if (
        menuToggle &&
        navLinks &&
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* GLOBAL STYLES */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background: #0a0e27;
          color: #e8eaed;
        }

        nav {
          padding: 16px 24px;
          background: #0f1438;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 700;
          font-size: 20px;
        }

        .menu-toggle {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: white;
        }

        .nav-links {
          list-style: none;
          display: none;
          gap: 20px;
        }

        .nav-links.active {
          display: block;
        }

        .nav-links li a {
          color: white;
          text-decoration: none;
        }

        .hero {
          padding: 80px 24px;
          text-align: center;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7c7cff, #00e0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        footer {
          text-align: center;
          padding: 24px;
          opacity: 0.7;
        }
      `}</style>

      {/* NAVBAR */}
      <nav>
        <div className="nav-content">
          <div className="logo">TC</div>

          <div
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            id="menuToggle"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
            id="navLinks"
          >
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#education" onClick={closeMenu}>Education</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h1>
          Hi, I&apos;m <span className="gradient-text">Taha Choudhary</span>
        </h1>
        <p>
          Trainee at Nexcore Institute of Technology, mastering AI & ML while
          building modern web experiences.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Taha Choudhary. Designed with passion and code.</p>
      </footer>
    </>
  );
}