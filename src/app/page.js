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
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .skills-grid .skill-card-new:nth-child(7) {
          grid-column: 2 / 3;
        }

        .skill-card-new {
          background: var(--dark-light);
          padding: 2rem;
          border-radius: 1.5rem;
          transition: all 0.3s;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-card-new:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.2);
        }

        .skill-icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          padding: 2rem;
          border-radius: 1rem;
        }

        .skill-icon {
          width: 80px;
          height: 80px;
          border-radius: 1rem;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .skill-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .skill-category {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-dim);
          text-align: center;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .skill-description {
          color: var(--text-dim);
          text-align: center;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .skill-proficiency {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .proficiency-label {
          font-size: 0.9rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .proficiency-value {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1s ease-in-out;
        }

        .skill-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .skill-level {
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: capitalize;
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
          padding: 3rem 0 1.5rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-section h4 {
          color: var(--text);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-logo {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
        }

        .footer-tagline {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          color: var(--text-dim);
          transition: all 0.3s;
        }

        .footer-social a:hover {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--secondary);
          transform: translateX(5px);
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        .footer-contact svg {
          flex-shrink: 0;
          color: var(--secondary);
        }

        .footer-contact a {
          color: var(--text-dim);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-contact a:hover {
          color: var(--secondary);
        }

        .footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          color: var(--text-dim);
          font-size: 0.9rem;
          margin: 0;
        }

        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 30px;
          right: 30px;
          background-color: #25D366;
          color: white;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          cursor: pointer;
        }

        .whatsapp-float:hover {
          background-color: #128C7E;
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
          transform: scale(1.1);
        }

        .whatsapp-float svg {
          width: 35px;
          height: 35px;
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

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .skills-grid .skill-card-new:nth-child(7) {
            grid-column: 1 / 2;
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
            gap: 1.5rem;
          }

          .skills-grid .skill-card-new:nth-child(7) {
            grid-column: 1 / 2;
          }

          .skill-card-new {
            padding: 1.5rem;
          }

          .skill-icon-container {
            padding: 1.5rem;
          }

          .skill-icon {
            width: 70px;
            height: 70px;
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

          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
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
          .skill-card-new,
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

          .whatsapp-float {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-float svg {
            width: 28px;
            height: 28px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
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
              {/* HTML5 Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(227, 79, 38, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <svg viewBox="0 0 128 128" style={{ width: '100%', height: '100%' }}>
                      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
                      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
                      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
                      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="skill-title">HTML5</h3>
                <p className="skill-category">MARKUP</p>
                <p className="skill-description">Semantic markup & accessibility</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#E44D26' }}>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #E44D26, #F16529)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 6 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #E44D26, #F16529)', color: 'white' }}>Advanced</span>
                </div>
              </div>

              {/* CSS3 Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(21, 114, 182, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <svg viewBox="0 0 128 128" style={{ width: '100%', height: '100%' }}>
                      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
                      <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
                      <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path>
                      <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path>
                      <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path>
                      <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="skill-title">CSS3</h3>
                <p className="skill-category">STYLING</p>
                <p className="skill-description">Animations, Flexbox & Grid</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#1572B6' }}>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #1572B6, #33A9DC)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 6 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #1572B6, #33A9DC)', color: 'white' }}>Advanced</span>
                </div>
              </div>

              {/* Tailwind CSS Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(6, 182, 212, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <svg viewBox="0 0 128 128" style={{ width: '100%', height: '100%' }}>
                      <path fill="#06B6D4" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="skill-title">Tailwind CSS</h3>
                <p className="skill-category">FRAMEWORK</p>
                <p className="skill-description">Utility-first design system</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#06B6D4' }}>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '85%', background: 'linear-gradient(90deg, #06B6D4, #0EA5E9)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 6 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #06B6D4, #0EA5E9)', color: 'white' }}>Advanced</span>
                </div>
              </div>

              {/* JavaScript Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(247, 223, 30, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <svg viewBox="0 0 128 128" style={{ width: '100%', height: '100%' }}>
                      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="skill-title">JavaScript</h3>
                <p className="skill-category">PROGRAMMING</p>
                <p className="skill-description">ES6+, DOM manipulation</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#F0DB4F' }}>50%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '50%', background: 'linear-gradient(90deg, #F0DB4F, #F7DF1E)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 6 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #F0DB4F, #F7DF1E)', color: '#323330' }}>Learning</span>
                </div>
              </div>

              {/* C Programming Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(0, 89, 157, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <svg viewBox="0 0 128 128" style={{ width: '100%', height: '100%' }}>
                      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
                      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="skill-title">C Programming</h3>
                <p className="skill-category">PROGRAMMING</p>
                <p className="skill-description">Fundamentals & syntax basics</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#03599C' }}>20%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '20%', background: 'linear-gradient(90deg, #03599C, #659AD3)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 2 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #03599C, #659AD3)', color: 'white' }}>Beginner</span>
                </div>
              </div>

              {/* Figma Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(242, 78, 30, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <img src="Figma.jpg" alt="Figma" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
                <h3 className="skill-title">Figma</h3>
                <p className="skill-category">UI/UX DESIGN</p>
                <p className="skill-description">Interface design & prototyping</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#F24E1E' }}>80%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%', background: 'linear-gradient(90deg, #F24E1E, #FF7262)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 5 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #F24E1E, #FF7262)', color: 'white' }}>Advanced</span>
                </div>
              </div>

              {/* WordPress Card */}
              <div className="skill-card-new">
                <div className="skill-icon-container" style={{ background: 'rgba(33, 117, 155, 0.1)' }}>
                  <div className="skill-icon" style={{ background: 'white' }}>
                    <img src="https://i.pinimg.com/736x/57/eb/dc/57ebdcc233373149b9780f4aa6349d8e.jpg" alt="WordPress" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
                <h3 className="skill-title">WordPress</h3>
                <p className="skill-category">CMS PLATFORM</p>
                <p className="skill-description">Theme customization & plugins</p>
                <div className="skill-proficiency">
                  <span className="proficiency-label">Proficiency</span>
                  <span className="proficiency-value" style={{ color: '#21759B' }}>80%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '80%', background: 'linear-gradient(90deg, #21759B, #23A8D8)' }}></div>
                </div>
                <div className="skill-footer">
                  <span className="skill-duration">⏱ 5 Months</span>
                  <span className="skill-level" style={{ background: 'linear-gradient(135deg, #21759B, #23A8D8)', color: 'white' }}>Advanced</span>
                </div>
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
            
            {/* HSC Education Card */}
            <div className="education-card" style={{ marginBottom: '2rem' }}>
              <div className="education-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ width: '70px', height: '70px', background: 'white', borderRadius: '0.75rem', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src="/clg.png" alt="Marceline College" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3 className="education-title">Higher Secondary Certificate (HSC)</h3>
                    <div className="education-institution">Marceline Junior College</div>
                  </div>
                </div>
                <div className="education-period">2023-2024</div>
              </div>
              <p className="education-description">
                Completed Higher Secondary Certificate (12th grade) with a focus on Commerce stream. 
                This foundation provided essential knowledge in business, economics, and analytical thinking, 
                which complements my technical skills in web development and AI/ML.
              </p>
            </div>

            {/* AI ML Training Card */}
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
                    <img src="LinkedIn.jpg" alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="contact-item-content">
                    <h4>LinkedIn</h4>
                    <p><a href="https://www.linkedin.com/in/taha-choudhary-3aa283358" target="_blank" rel="noopener noreferrer">linkedin.com/in/taha-choudhary</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'white', padding: '0.5rem' }}>
                    <img src="GitHub.jpg" alt="GitHub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="contact-item-content">
                    <h4>GitHub</h4>
                    <p><a href="https://github.com/tahachoudhary54" target="_blank" rel="noopener noreferrer">github.com/tahachoudhary54</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon" style={{ background: 'linear-gradient(135deg, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)', padding: '0.5rem' }}>
                    <svg viewBox="0 0 24 24" fill="white" style={{ width: '100%', height: '100%' }}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="contact-item-content">
                    <h4>Instagram</h4>
                    <p><a href="https://www.instagram.com/taha_choudhary_19/" target="_blank" rel="noopener noreferrer">@taha_choudhary_19</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-logo">TC</div>
                <p className="footer-tagline">Building the future with AI & Web Technologies</p>
                <div className="footer-social">
                  <a href="https://github.com/tahachoudhary54" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/taha-choudhary-3aa283358" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/taha_choudhary_19/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="mailto:tahachoudhary54@gmail.com" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <ul className="footer-links">
                  <li><a href="#education">Education</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="https://github.com/tahachoudhary54" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/taha-choudhary-3aa283358" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Get In Touch</h4>
                <ul className="footer-contact">
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href="mailto:tahachoudhary54@gmail.com">tahachoudhary54@gmail.com</a>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Mumbai, India</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Taha Choudhary. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Sticky WhatsApp Button */}
        <a 
          href="https://wa.me/919987343330" 
          className="whatsapp-float" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </>
  );
}