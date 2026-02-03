"use client";

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [menuActive, setMenuActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add fonts to document
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    link2.rel = 'stylesheet';
    document.head.appendChild(link2);

    // Close menu when clicking outside
    const handleClickOutside = (e) => {
      if (!e.target.closest('.menu-toggle') && !e.target.closest('.nav-links')) {
        setMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNavClick = () => {
    setMenuActive(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }

        :root {
          --primary: #0066FF;
          --secondary: #00F5FF;
          --dark: #0A0E27;
          --dark-light: #1A1F3A;
          --accent: #FF3366;
          --text: #E8EAED;
          --text-dim: #9CA3AF;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: var(--dark);
          color: var(--text);
          overflow-x: hidden;
          line-height: 1.8;
          font-size: 16px;
        }

        h1, h2, h3, h4, h5, h6, p, span, div, a, button {
          overflow: visible !important;
          line-height: 1.6 !important;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          z-index: 1001;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--secondary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary);
          transition: width 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          z-index: 1001;
        }

        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text);
          border-radius: 3px;
          transition: all 0.3s;
        }

        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 102, 255, 0.15), transparent 70%);
          top: -200px;
          right: -200px;
          border-radius: 50%;
          animation: pulse 8s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 245, 255, 0.1), transparent 70%);
          bottom: -100px;
          left: -100px;
          border-radius: 50%;
          animation: pulse 6s ease-in-out infinite reverse;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: clamp(1rem, 2.5vw, 1.375rem);
          color: var(--text-dim);
          max-width: 600px;
          margin-bottom: 2rem;
          line-height: 1.8;
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        .btn {
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          font-size: 0.95rem;
          text-align: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.4);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }

        .btn-secondary:hover {
          background: var(--primary);
          color: white;
        }

        section {
          padding: 5rem 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-tag {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(0, 245, 255, 0.1);
          border-radius: 50px;
          color: var(--secondary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 5vw, 4.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
          padding-bottom: 0.5rem;
        }

        .section-subtitle {
          color: var(--text-dim);
          font-size: clamp(1rem, 2vw, 1.375rem);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-image {
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(135deg, var(--dark-light), rgba(0, 102, 255, 0.1));
          border-radius: 2rem;
          border: 2px solid rgba(0, 245, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          position: relative;
          overflow: hidden;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2rem;
        }

        .about-content h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          margin-bottom: 1.5rem;
          line-height: 1.4;
          padding-bottom: 0.5rem;
        }

        .about-content p {
          color: var(--text-dim);
          margin-bottom: 1.5rem;
          line-height: 1.9;
          font-size: clamp(0.95rem, 2vw, 1.125rem);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem 1rem;
          background: var(--dark-light);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-number {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .stat-label {
          color: var(--text-dim);
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          margin-top: 0.5rem;
          line-height: 1.5;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: var(--dark-light);
          padding: 2rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
          position: relative;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
          border-radius: 1.5rem 1.5rem 0 0;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.5;
          padding-bottom: 0.75rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--dark-light);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 245, 255, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          position: relative;
          border-radius: 1.5rem 1.5rem 0 0;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .project-content {
          padding: 1.5rem;
          padding-bottom: 2rem;
        }

        .project-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          margin-bottom: 1rem;
          line-height: 1.5;
          padding-bottom: 0.5rem;
        }

        .project-description {
          color: var(--text-dim);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: clamp(0.9rem, 1.5vw, 1.0625rem);
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-tag {
          padding: 0.35rem 0.875rem;
          background: rgba(0, 102, 255, 0.1);
          border: 1px solid rgba(0, 102, 255, 0.3);
          border-radius: 50px;
          font-size: 0.75rem;
          color: var(--secondary);
        }

        .project-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .project-link {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid var(--primary);
          border-radius: 50px;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s;
          text-align: center;
        }

        .project-link:hover {
          background: var(--primary);
          color: white;
        }

        .education-card {
          background: var(--dark-light);
          padding: 2.5rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(180deg, var(--primary), var(--secondary));
          border-radius: 1.5rem 0 0 1.5rem;
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .education-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.25rem, 2.5vw, 2rem);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .education-institution {
          color: var(--secondary);
          font-weight: 600;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.5;
        }

        .education-period {
          padding: 0.5rem 1.5rem;
          background: rgba(0, 245, 255, 0.1);
          border-radius: 50px;
          color: var(--secondary);
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .education-description {
          color: var(--text-dim);
          line-height: 1.9;
          font-size: clamp(0.95rem, 1.5vw, 1.125rem);
        }

        .contact-info {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .contact-info > p {
          color: var(--text-dim);
          margin-bottom: 2rem;
          line-height: 1.9;
          font-size: clamp(1rem, 2vw, 1.125rem);
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--dark-light);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }

        .contact-item:hover {
          border-color: var(--primary);
          transform: translateX(5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .contact-item-content h4 {
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
        }

        .contact-item-content p {
          color: var(--text-dim);
          margin: 0;
          font-size: clamp(0.8rem, 1.2vw, 0.875rem);
          word-break: break-word;
        }

        .contact-item-content a {
          color: var(--text-dim);
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-item-content a:hover {
          color: var(--secondary);
        }

        footer {
          background: var(--dark-light);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
          text-align: center;
        }

        footer p {
          color: var(--text-dim);
          font-size: clamp(0.85rem, 1.2vw, 1rem);
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 1.5rem;
          }

          section {
            padding: 4rem 0;
          }

          .about-grid {
            gap: 2.5rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            max-width: 300px;
            background: var(--dark-light);
            flex-direction: column;
            padding: 5rem 2rem 2rem;
            gap: 2rem;
            transition: right 0.3s ease;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links a {
            font-size: 1.1rem;
          }

          .menu-toggle {
            display: flex;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .hero {
            min-height: 90vh;
            padding-top: 100px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .education-header {
            flex-direction: column;
          }

          .education-period {
            align-self: flex-start;
          }

          section {
            padding: 3rem 0;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .nav-content {
            padding: 1rem;
          }

          .logo {
            font-size: 1.25rem;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .stat-item {
            padding: 1rem;
          }

          .skill-card,
          .project-content,
          .education-card {
            padding: 1.5rem;
          }

          .contact-item {
            padding: 1rem;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
            font-size: 1rem;
          }

          .project-image {
            height: 180px;
          }

          .section-header {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 360px) {
          .hero h1 {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div>
        {/* Navigation */}
        <nav>
          <div className="nav-content">
            <div className="logo">TC</div>
            <div 
              className={`menu-toggle ${menuActive ? 'active' : ''}`}
              onClick={() => setMenuActive(!menuActive)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
              <li><a href="#home" onClick={handleNavClick}>Home</a></li>
              <li><a href="#about" onClick={handleNavClick}>About</a></li>
              <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
              <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
              <li><a href="#education" onClick={handleNavClick}>Education</a></li>
              <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Hi, I&apos;m<br /><span className="gradient-text">Taha Choudhary</span>
              </h1>
              <p>
                Trainee at Nexcore Institute of Technology, mastering AI & ML while building 
                beautiful web experiences with modern technologies.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">Get In Touch</a>
                <a href="#skills" className="btn btn-secondary">View Skills</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">📖 Get to know me</div>
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-grid">
              <div className="about-image">
                <img src="/Taha.png" alt="Taha Choudhary" />
              </div>
              <div className="about-content">
                <h3>Building the Future with AI & Web Technologies</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ minWidth: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                      🎓
                    </div>
                    <p style={{ margin: 0, paddingTop: '0.5rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                      Currently a trainee at <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Nexcore Institute of Technology</span>, diving deep into AI & ML (2025-2028)
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ minWidth: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                      💻
                    </div>
                    <p style={{ margin: 0, paddingTop: '0.5rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                      Passionate about creating <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>beautiful, functional websites</span> using modern web technologies
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                    <div style={{ minWidth: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                      🚀
                    </div>
                    <p style={{ margin: 0, paddingTop: '0.5rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
                      Believer in <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>learning by doing</span> - constantly working on projects that merge web development with AI
                    </p>
                  </div>
                </div>
                <div className="stats">
                  <div className="stat-item">
                    <div className="stat-number">2025</div>
                    <div className="stat-label">Started Journey</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">6+</div>
                    <div className="stat-label">Technologies</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">3</div>
                    <div className="stat-label">Years Program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">💻 What I know</div>
              <h2 className="section-title">My Skills</h2>
              <p className="section-subtitle">
                Technologies and tools I&apos;m proficient in and continuously learning
              </p>
            </div>
            <div className="skills-grid">
              {/* Languages Container */}
              <div className="skill-card">
                <h3 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem' }}>Languages</h3>
                
                {/* HTML */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>HTML</span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                    </div>
                  </div>
                </div>

                {/* CSS */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>CSS</span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                    </div>
                  </div>
                </div>

                {/* JavaScript */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>JavaScript</span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                    </div>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div style={{ marginBottom: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Tailwind CSS</span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* UI/UX Design Container */}
              <div className="skill-card">
                <h3 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem' }}>UI/UX Design</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '1rem', padding: 0, overflow: 'hidden', flexShrink: 0 }}>
                    <img src="Figma.jpg" alt="Figma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Figma</h4>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                  Creating -centered designs and interactive prototypes for web applications with professional design tools.
                </p>
              </div>

              {/* WordPress Container */}
              <div className="skill-card">
                <h3 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '1rem' }}>CMS Platform</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '1rem', padding: 0, overflow: 'hidden', flexShrink: 0 }}>
                    <img src="https://i.pinimg.com/736x/57/eb/dc/57ebdcc233373149b9780f4aa6349d8e.jpg" alt="WordPress" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>WordPress</h4>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>★</span>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                  Developing and managing professional websites using WordPress with custom themes and responsive design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">🚀 What I&apos;ve built</div>
              <h2 className="section-title">My Projects</h2>
              <p className="section-subtitle">
                A collection of my recent work and side projects
              </p>
            </div>
            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-image" style={{ padding: 0 }}>
                  <img src="Wanderlust.png" alt="Wanderlust Travel Website" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1.5rem 1.5rem 0 0' }} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Wanderlust Travel Website</h3>
                  <p className="project-description">
                    A stunning travel website featuring the Wanderlust brand with beautiful beach imagery. 
                    Built with HTML, CSS, and Tailwind CSS featuring smooth animations and responsive design.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">HTML</span>
                    <span className="project-tag">CSS</span>
                    <span className="project-tag">Tailwind</span>
                    <span className="project-tag">Responsive</span>
                  </div>
                  <div className="project-links">
                    <a href="/TravelsAgents.HTML" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <div className="project-image" style={{ padding: 0, background: '#1E1E1E' }}>
                  <img src="Figmaw.png" alt="Figma Design System" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1.5rem 1.5rem 0 0' }} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Design System</h3>
                  <p className="project-description">
                    Created a comprehensive design system in Figma with reusable components, 
                    color palettes, and typography guidelines.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">Figma</span>
                    <span className="project-tag">UI/UX</span>
                    <span className="project-tag">Design</span>
                  </div>
                  <div className="project-links">
                    <a href="https://www.figma.com/design/g7i00edInUl6SZaVBy0XTW/Taha-Choudhary?node-id=0-1&t=OnaTT0PVmaTgfYTn-1" target="_blank" rel="noopener noreferrer" className="project-link">View in Figma</a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card">
                <div className="project-image" style={{ padding: 0 }}>
                  <img src="/book.png" alt="BookMyShow Clone" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1.5rem 1.5rem 0 0' }} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">BookMyShow Clone</h3>
                  <p className="project-description">
                    A movie ticket booking platform clone featuring responsive design, 
                    event listings, and modern UI/UX principles with Tailwind CSS.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">HTML</span>
                    <span className="project-tag">Tailwind CSS</span>
                    <span className="project-tag">Responsive</span>
                  </div>
                  <div className="project-links">
                    <a href="BookMyShow.html" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">🎓 Learning journey</div>
              <h2 className="section-title">Education</h2>
            </div>
            <div className="education-card">
              <div className="education-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ width: '70px', height: '70px', background: 'white', borderRadius: '0.75rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/NIT.png" alt="Nexcore Institute" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3 className="education-title">AI & Machine Learning Training</h3>
                    <div className="education-institution">Nexcore Institute of Technology</div>
                  </div>
                </div>
                <div className="education-period">2025 - 2028</div>
              </div>
              <p className="education-description">
                Comprehensive training program focused on Artificial Intelligence and Machine Learning. 
                The curriculum covers fundamental concepts, practical applications, and hands-on projects 
                in AI/ML technologies. Alongside AI/ML, I&apos;ve been building a strong foundation in web 
                development technologies including HTML, CSS, Tailwind CSS, JavaScript, Figma for design, 
                and WordPress for content management.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">📧 Let&apos;s connect</div>
              <h2 className="section-title">Get In Touch</h2>
            </div>
            <div className="contact-info">
              <h3>Let&apos;s Work Together</h3>
              <p>
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'white', padding: '0.5rem' }}>
                    <img src="mail.jpg" alt="Email" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p><a href="mailto:tahachoudhary54@gmail.com">tahachoudhary54@gmail.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'white', padding: '0.5rem' }}>
                    <img src="Linkedin.jpg" alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="contact-item-content">
                    <h4>LinkedIn</h4>
                    <p><a href="https://www.linkedin.com/in/taha-choudhary-3aa283358" target="_blank" rel="noopener noreferrer">linkedin.com/in/taha-choudhary</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'white', padding: '0.5rem' }}>
                    <img src="Github.jpg" alt="GitHub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="contact-item-content">
                    <h4>GitHub</h4>
                    <p><a href="https://github.com/tahachoudhary54" target="_blank" rel="noopener noreferrer">github.com/tahachoudhary54</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container">
            <p>© 2026 Taha Choudhary. Designed with passion and code.</p>
          </div>
        </footer>
      </div>
    </>
  );
}