'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');

      if (
        menuToggle &&
        navLinks &&
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Head>
        <title>Taha Choudhary - Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        /* YOUR FULL CSS IS UNCHANGED */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #0a0e27;
          color: #e8eaed;
        }
      `}</style>

      {/* NAVBAR */}
      <nav>
        <div className="nav-content">
          <div className="logo">TC</div>

          <div
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            id="menuToggle"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container">
          <h1>
            Hi, I&apos;m <span className="gradient-text">Taha Choudhary</span>
          </h1>
          <p>
            Trainee at Nexcore Institute of Technology, mastering AI & ML while
            building modern web experiences.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Taha Choudhary. Designed with passion and code.</p>
      </footer>
    </>
  );
}
