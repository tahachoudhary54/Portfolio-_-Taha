"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ============================================
   DATA
   ============================================ */
const PROJECTS = [
  {
    id: "01",
    name: "Downtown Boutique",
    short: "Luxury menswear e-commerce platform",
    description:
      "A premium modern luxury menswear boutique website with a sleek, sophisticated UI. Features full e-commerce functionality, designed for discerning individuals seeking everyday style and comfort.",
    tags: ["Next.js", "React", "MongoDB", "E-Commerce"],
    image: "/downtown.png",
    link: "https://downtownboutique.in/",
    external: true,
  },
  {
    id: "02",
    name: "Wanderlust Travel",
    short: "Cinematic travel brand website",
    description:
      "A stunning travel website featuring the Wanderlust brand with beautiful beach imagery, smooth animations, and fully responsive design. Built with HTML, CSS, and Tailwind CSS.",
    tags: ["HTML", "CSS", "Tailwind", "Responsive"],
    image: "/Wanderlust.png",
    link: "/Wanderlust.html",
    external: false,
  },
  {
    id: "03",
    name: "Figma Design System",
    short: "Comprehensive UI component library",
    description:
      "A comprehensive design system built in Figma featuring reusable components, a curated color palette, and typography guidelines — bridging design and development workflows.",
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    image: "/Figmaw.png",
    link: "https://www.figma.com/design/g7i00edInUl6SZaVBy0XTW/Taha-Choudhary?node-id=0-1&t=OnaTT0PVmaTgfYTn-1",
    external: true,
  },
];

const SKILLS = [
  { name: "HTML5", level: "Advanced", pct: 85, category: "Markup", color: "#E44D26" },
  { name: "CSS3", level: "Advanced", pct: 85, category: "Styling", color: "#1572B6" },
  { name: "Tailwind CSS", level: "Advanced", pct: 85, category: "Framework", color: "#06B6D4" },
  { name: "JavaScript", level: "Learning", pct: 50, category: "Programming", color: "#F7DF1E" },
  { name: "C Programming", level: "Intermediate", pct: 60, category: "Programming", color: "#03599C" },
  { name: "Figma", level: "Advanced", pct: 80, category: "UI/UX Design", color: "#F24E1E" },
  { name: "React", level: "Intermediate", pct: 70, category: "Library", color: "#61DAFB" },
  { name: "Express.js", level: "Intermediate", pct: 65, category: "Backend", color: "#808080" },
  { name: "Next.js", level: "Advanced", pct: 75, category: "Framework", color: "#f0f0f0" },
  { name: "WordPress", level: "Advanced", pct: 80, category: "CMS", color: "#21759B" },
  { name: "MySQL", level: "Intermediate", pct: 75, category: "Database", color: "#4479A1" },
  { name: "Microsoft Excel", level: "Advanced", pct: 85, category: "Data Analysis", color: "#217346" },
];

const CERTS = [
  {
    image: "/certificates/teaching-ai-fluency-framework.png",
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    date: "2026",
    description:
      "Completed advanced learning focused on teaching AI fluency concepts, responsible usage, and practical classroom integration.",
    skills: ["AI Education", "Teaching Methods", "AI Ethics", "Curriculum Design"],
  },
  {
    image: "/certificates/teaching-ai-fluency-framework.png",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    description:
      "Core certification covering the foundational framework of AI fluency, machine learning basics, NLP, and ethical AI deployment.",
    skills: ["AI Fundamentals", "Machine Learning", "NLP", "AI Ethics"],
  },
  {
    image: "/certificates/claude-101.png",
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    description:
      "Foundational course on Claude AI, covering core capabilities, best practices for prompt engineering, and effective AI leverage.",
    skills: ["Prompt Engineering", "AI Interaction", "Claude AI", "Conversational AI"],
  },
  {
    image: "/certificates/ai-fluency-for-students.png",
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "2026",
    description:
      "Student-focused program covering AI fundamentals, responsible usage, practical applications for learning and research.",
    skills: ["AI Literacy", "Research Skills", "Critical Thinking", "Digital Skills"],
  },
  {
    image: "/certificates/ai-fluency-for-nonprofits.png",
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic & GivingTuesday",
    date: "2026",
    description:
      "Focused training on leveraging AI technologies for nonprofit organizations and social impact initiatives.",
    skills: ["Social Impact", "Nonprofit Management", "AI Strategy", "Community Engagement"],
  },
  {
    image: "/certificates/ai-fluency-for-educators.png",
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    date: "2026",
    description:
      "Specialized program for educators to integrate AI tools into teaching practices, covering ethical considerations and student engagement.",
    skills: ["Educational Technology", "AI in Education", "Student Engagement", "Digital Literacy"],
  },
  {
    image: "/certificates/attendance-excellence-award.png",
    title: "Attendance Excellence Award",
    issuer: "Nexcore Institute of Technology",
    date: "June 6, 2026",
    description:
      "Awarded for achieving the highest attendance in First Year of AI & Data Science, recognizing outstanding punctuality, dedication, and consistent presence.",
    skills: ["Discipline", "Punctuality", "AI & Data Science", "First Year"],
  },
  {
    image: "/certificates/certificate-of-innovation-hackathon.png",
    title: "Certificate of Innovation — NIT-CoDeX Hackathon",
    issuer: "Nexcore Institute of Technology",
    date: "May 23, 2026",
    description:
      'Received the prestigious "Idea to Impact Award" at NIT-CoDeX Hackathon 2026 Season 1 for Team Errorists — outstanding creativity and problem-solving.',
    skills: ["Innovation", "Problem Solving", "Hackathon", "Creative Thinking"],
  },
  {
    image: "/certificates/shark-tank-participation.png",
    title: "Participation — Shark Tank AIKTC",
    issuer: "Anjuman-I-Islam's Kalsekar Technical Campus",
    date: "August 21–22, 2026",
    description:
      "Participated in Shark Tank AIKTC 2026 with Team X Factors, organized by E-Cell AIKTC and the Kalsekar Incubation Centre.",
    skills: ["Entrepreneurship", "Startup Pitch", "Innovation", "E-Cell"],
  },
  {
    image: "/certificates/yuva-ai-for-all.png",
    title: "Yuva AI For ALL — English",
    issuer: "AISECT Learn (INDIAai)",
    date: "January 21, 2026",
    description:
      "Completed a structured AI learning program covering basic AI concepts, awareness, and applications. Youth-focused initiative to democratize AI education.",
    skills: ["AI Basics", "Youth Empowerment", "Career Development", "Future Skills"],
  },
  {
    image: "/certificates/ai-for-all-appreciate-stage.png",
    title: "AI For All — AI Appreciate Stage",
    issuer: "Intel & Digital India",
    date: "January 12, 2026",
    description:
      "Participated in Intel's AI For All initiative completing the AI Appreciate stage, exploring AI applications across industries.",
    skills: ["AI Awareness", "Digital Transformation", "Industry Applications", "Innovation"],
  },
];


/* ============================================
   PARTICLE SYSTEM
   ============================================ */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const N = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.6 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 231, 255, ${p.a * 0.5})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(110, 231, 255, ${0.03 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    // Reduce motion check
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

/* ============================================
   MAIN PORTFOLIO COMPONENT
   ============================================ */
export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [certZoom, setCertZoom] = useState(1);
  const [pinchData, setPinchData] = useState({ start: 0, startZoom: 1 });

  const scrollProgressRef = useRef(null);

  // Hero refs

  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroActionsRef = useRef(null);
  const heroCtasRef = useRef(null);
  const heroPortraitRef = useRef(null);


  // Refs for scroll reveals
  const revealRefs = useRef([]);
  const skillBarsRef = useRef([]);

  const addRevealRef = useCallback((el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  }, []);

  /* ------ Mount ------ */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ------ Scroll listener ------ */
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setShowBackTop(y > 400);

      // Scroll progress
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.transform = `scaleX(${total ? y / total : 0})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);



  /* ------ Hero Entrance Animation (CSS-based, no GSAP needed) ------ */
  useEffect(() => {
    if (!mounted) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));


      // Title lines
      if (heroTitleRef.current) {
        heroTitleRef.current.style.opacity = "1";
        const inners = heroTitleRef.current.querySelectorAll(".hero-title-inner");
        inners.forEach((inner, i) => {
          if (!prefersReduced) {
            setTimeout(() => {
              inner.style.transition = `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`;
              inner.style.transform = "translateY(0)";
            }, 0);
          } else {
            inner.style.transform = "none";
          }
        });
      }

      if (!prefersReduced) await delay(500);

      if (heroSubtitleRef.current) {
        heroSubtitleRef.current.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)";
        heroSubtitleRef.current.style.opacity = "1";
        heroSubtitleRef.current.style.transform = "translateY(0)";
      }

      if (!prefersReduced) await delay(150);

      if (heroActionsRef.current) {
        heroActionsRef.current.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)";
        heroActionsRef.current.style.opacity = "1";
        heroActionsRef.current.style.transform = "translateY(0)";
      }

      if (heroCtasRef.current) {
        heroCtasRef.current.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)";
        heroCtasRef.current.style.opacity = "1";
        heroCtasRef.current.style.transform = "translateY(0)";
      }

      if (!prefersReduced) await delay(200);

      if (heroPortraitRef.current) {
        heroPortraitRef.current.style.transition = "opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1)";
        heroPortraitRef.current.style.opacity = "1";
        heroPortraitRef.current.style.transform = "translateY(0) scale(1)";
      }

      if (!prefersReduced) await delay(300);


    };

    animate();
  }, [mounted]);

  /* ------ Scroll Reveal ------ */
  useEffect(() => {
    if (!mounted) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || "0";

            if (prefersReduced) {
              el.style.opacity = "1";
              el.style.transform = "none";
            } else {
              setTimeout(() => {
                el.style.transition = "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)";
                el.style.opacity = "1";
                el.style.transform = "translate(0,0)";
              }, parseInt(delay));
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  /* ------ Skill Bar Reveals ------ */
  useEffect(() => {
    if (!mounted) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      skillBarsRef.current.forEach((el) => {
        if (el) el.style.transform = "scaleX(1)";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scaleX(1)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBarsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  /* ------ Parallax on hero (mouse) ------ */
  useEffect(() => {
    if (!mounted) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      const orb1 = hero.querySelector(".hero-orb-1");
      const orb2 = hero.querySelector(".hero-orb-2");
      if (orb1) orb1.style.transform = `translate(${dx * 20}px, ${dy * 20}px)`;
      if (orb2) orb2.style.transform = `translate(${-dx * 15}px, ${-dy * 15}px)`;
    };

    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, [mounted]);

  /* ------ Lock body scroll when modal is open ------ */
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      setCertZoom(1);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedCert]);

  /* ------ ESC closes modal ------ */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedCert(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ------ Zoom handlers for cert modal ------ */
  const handleWheelZoom = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    setCertZoom((z) => Math.min(Math.max(z + delta, 0.5), 5));
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setPinchData({ start: dist, startZoom: certZoom });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setCertZoom(
        Math.min(Math.max(pinchData.startZoom * (dist / (pinchData.start || 1)), 0.5), 5)
      );
    }
  };

  if (!mounted) return null;

  return (
    <>


      {/* ── Scroll Progress ── */}
      <div ref={scrollProgressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} aria-hidden="true" />

      {/* ══════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════ */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
            Taha <span>Choudhary</span>
          </a>

          <ul className="nav-links" role="list">
            {["about", "skills", "projects", "education", "certificates", "contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`} role="dialog" aria-label="Mobile menu">
        {["home", "about", "skills", "projects", "education", "certificates", "contact"].map((id) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section id="home" className="hero" aria-label="Hero section">
        {/* Background */}
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          {/* Subtle violet ambient glow behind portrait */}
          <div className="hero-orb hero-orb-portrait" aria-hidden="true" />
          <ParticleCanvas />
        </div>

        <div className="container hero-content hero-two-col">

          {/* LEFT — Text */}
          <div className="hero-left">
            {/* Headline */}
            <h1
              ref={heroTitleRef}
              className="hero-title display-xl"
              style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}
            >
              <span className="hero-title-line">
                <span className="hero-title-inner">Taha</span>
              </span>
              <span className="hero-title-line">
                <span className="hero-title-inner accent" style={{ WebkitTextStroke: "1px var(--accent)", WebkitTextFillColor: "transparent" }}>
                  Choudhary
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <div ref={heroSubtitleRef} className="hero-subtitle">
              <span className="hero-subtitle-line" aria-hidden="true" />
              <p className="hero-subtitle-text">
                AI &amp; Data Science Student · Web Developer · UI/UX Designer
              </p>
            </div>

            {/* Description */}
            <p
              ref={heroActionsRef}
              style={{ display: "block", maxWidth: "480px", color: "var(--text-2)", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", lineHeight: "1.75", marginTop: "1.5rem", opacity: 0, transform: "translateY(30px)" }}
            >
              Trainee at Nexcore Institute of Technology, mastering AI {'&'} DS while building
              beautiful web experiences with modern technologies.
            </p>

            {/* Actions */}
            <div
              ref={heroCtasRef}
              style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap", opacity: 0, transform: "translateY(30px)" }}
            >
              <a href="#projects" className="btn-primary">
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div
            ref={heroPortraitRef}
            className="hero-portrait-wrap"
            style={{ opacity: 0, transform: "translateY(20px) scale(0.98)" }}
            aria-hidden="true"
          >
            <img
              src="/Taha.png"
              alt="Taha Choudhary"
              className="hero-portrait-img"
            />
          </div>

        </div>

      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="section-pad" aria-label="About section">
        <div className="container">
          <div className="about-grid-rebalanced">
            {/* Left — text block */}
            <div className="about-text">
              <div ref={addRevealRef} className="section-label reveal-up" data-delay="0">
                About Me
              </div>
              <h2
                ref={addRevealRef}
                className="display-md reveal-up"
                data-delay="80"
                style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)", color: "var(--text-1)", marginBottom: "2rem" }}
              >
                Building the Future with AI &amp; Web Technologies
              </h2>
              <div ref={addRevealRef} className="reveal-up" data-delay="160">
                <p>
                  I&apos;m <strong style={{ color: "var(--text-1)" }}>Taha Choudhary</strong>, a trainee at{" "}
                  <strong style={{ color: "var(--accent)" }}>Nexcore Institute of Technology</strong>, pursuing an intensive
                  3-year program in AI &amp; Data Science (2025–2028). I&apos;m building a strong foundation
                  in artificial intelligence, data science, and modern software development practices.
                </p>
                <p>
                  Passionate about creating{" "}
                  <strong style={{ color: "var(--text-1)" }}>beautiful, user-centric websites</strong> using React,
                  Next.js, and Tailwind CSS. I bridge the gap between design and development by working in
                  Figma to craft intuitive interfaces before bringing them to life in code.
                </p>
                <p>
                  I constantly work on real-world projects that merge web development with AI capabilities
                  to solve practical problems — from travel websites to luxury e-commerce platforms.
                </p>
              </div>

              <div ref={addRevealRef} className="reveal-up" data-delay="240" style={{ marginTop: "2rem" }}>
                <a href="#contact" className="btn-primary">
                  <span>Get In Touch</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right — stats */}
            <div ref={addRevealRef} className="about-stats-col reveal-right" data-delay="200">
              <div className="about-stats">
                <div>
                  <div className="about-stat-num">10<span className="accent">+</span></div>
                  <div className="about-stat-label">Technologies</div>
                </div>
                <div>
                  <div className="about-stat-num">3<span className="accent">+</span></div>
                  <div className="about-stat-label">Live Projects</div>
                </div>
                <div>
                  <div className="about-stat-num">11<span className="accent">+</span></div>
                  <div className="about-stat-label">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════ */}
      <section id="skills" aria-label="Skills section">

        {/* Skills grid */}
        <div className="section-pad">
          <div className="container">
            <div ref={addRevealRef} className="section-label reveal-up" data-delay="0">
              What I Know
            </div>
            <h2
              ref={addRevealRef}
              className="display-md reveal-up"
              data-delay="100"
              style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)", color: "var(--text-1)", marginBottom: "3rem" }}
            >
              My Skills
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {SKILLS.map((skill, i) => (
                <div
                  key={skill.name}
                  ref={addRevealRef}
                  className="skill-card reveal-up"
                  data-delay={`${(i % 4) * 80}`}
                >
                  <div className="skill-card-top">
                    <span className="skill-card-name" style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}>
                      {skill.name}
                    </span>
                    <span className="skill-card-level">{skill.level}</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-3)", marginBottom: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {skill.category}
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      ref={(el) => { skillBarsRef.current[i] = el; }}
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-3)" }}>Proficiency</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: skill.color }}>{skill.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════ */}
      <section id="projects" className="section-pad" aria-label="Projects section">
        <div className="container">
          <div ref={addRevealRef} className="section-label reveal-up" data-delay="0">
            What I&apos;ve Built
          </div>
          <h2
            ref={addRevealRef}
            className="display-md reveal-up"
            data-delay="100"
            style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)", color: "var(--text-1)", marginBottom: "0.75rem" }}
          >
            Selected Projects
          </h2>
          <p
            ref={addRevealRef}
            className="reveal-up body-lg"
            data-delay="150"
            style={{ marginBottom: "3rem", maxWidth: "480px" }}
          >
            A collection of recent work spanning web development, UI/UX design, and AI-powered experiences.
          </p>

          {/* Project feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PROJECTS.map((project, i) => (
              <a
                key={project.id}
                href={project.link}
                target={project.external ? "_blank" : "_self"}
                rel={project.external ? "noopener noreferrer" : undefined}
                ref={addRevealRef}
                className="project-card-lg reveal-up"
                data-delay={`${i * 100}`}
                aria-label={`View ${project.name} project`}
              >
                <div className="project-card-img">
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <div className="project-card-img-overlay" aria-hidden="true" />
                </div>
                <div className="project-card-body">
                  <div className="project-card-number">{project.id}</div>
                  <h3 className="project-card-title" style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}>
                    {project.name}
                  </h3>
                  <p className="project-card-text">{project.description}</p>
                  <div className="project-card-footer">
                    <div className="project-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag-inline">{tag}</span>
                      ))}
                    </div>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                        color: "var(--text-2)",
                      }}
                      aria-hidden="true"
                    >
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════════ */}
      <section id="education" className="section-pad" aria-label="Education section">
        <div className="container">
          <div ref={addRevealRef} className="section-label reveal-up" data-delay="0">
            Learning Journey
          </div>
          <h2
            ref={addRevealRef}
            className="display-md reveal-up"
            data-delay="100"
            style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)", color: "var(--text-1)", marginBottom: "4rem" }}
          >
            Education
          </h2>

          <div className="edu-timeline">
            {/* AI & DS */}
            <div ref={addRevealRef} className="edu-item reveal-up" data-delay="0">
              <div className="edu-dot" aria-hidden="true" />
              <div className="edu-period">2025 — 2028</div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="/NIT.png" alt="Nexcore Institute of Technology" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <h3 className="edu-title" style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}>
                  AI & Data Science Training
                </h3>
              </div>
              <div className="edu-institution">Nexcore Institute of Technology</div>
              <p className="edu-description">
                Comprehensive 3-year training program focused on Artificial Intelligence and Data Science.
                The curriculum covers fundamental concepts, practical applications, and hands-on projects
                in AI/DS technologies. Alongside AI/DS, I&apos;ve been building a strong foundation in modern
                web development — React, Next.js, Tailwind CSS, and Figma for design.
              </p>
            </div>

            {/* HSC */}
            <div ref={addRevealRef} className="edu-item reveal-up" data-delay="100">
              <div className="edu-dot" aria-hidden="true" />
              <div className="edu-period">2023 — 2024</div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="/clg.png" alt="Marceline Junior College" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <h3 className="edu-title" style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}>
                  Higher Secondary Certificate (HSC)
                </h3>
              </div>
              <div className="edu-institution">Marceline Junior College</div>
              <p className="edu-description">
                Completed HSC (12th grade) with a focus on the Commerce stream. This foundation provided
                essential knowledge in business, economics, and analytical thinking — complementing my
                technical skills in full-stack development and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CERTIFICATES
      ══════════════════════════════════════════ */}
      <section id="certificates" className="section-pad" aria-label="Certificates section">
        <div className="container">
          <div ref={addRevealRef} className="section-label reveal-up" data-delay="0">
            Achievements
          </div>
          <h2
            ref={addRevealRef}
            className="display-md reveal-up"
            data-delay="100"
            style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)", color: "var(--text-1)", marginBottom: "0.75rem" }}
          >
            Certificates
          </h2>
          <p
            ref={addRevealRef}
            className="reveal-up body-lg"
            data-delay="150"
            style={{ marginBottom: "3rem", maxWidth: "480px" }}
          >
            A curated collection reflecting continuous learning in AI, digital skills, and emerging technologies.
          </p>

          <div className="certs-grid">
            {CERTS.map((cert, i) => (
              <button
                key={i}
                ref={addRevealRef}
                className="cert-card reveal-up"
                data-delay={`${(i % 3) * 80}`}
                onClick={() => setSelectedCert(cert)}
                aria-label={`View certificate: ${cert.title}`}
                style={{ textAlign: "left", background: "none", width: "100%" }}
              >
                <div className="cert-img-wrap">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>
                <div className="cert-body">
                  <div className="cert-issuer">{cert.issuer}</div>
                  <h3 className="cert-title" style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}>
                    {cert.title}
                  </h3>
                  <div className="cert-date">{cert.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" className="section-pad contact-section" aria-label="Contact section">
        <div className="container">
          <div className="contact-grid">

            {/* ── LEFT ── Intro + Email */}
            <div className="contact-left">
              <div ref={addRevealRef} className="section-label reveal-up" data-delay="0">
                Let&apos;s Connect
              </div>

              <h2
                ref={addRevealRef}
                className="display-md reveal-up contact-heading"
                data-delay="80"
              >
                Let&apos;s connect and<br />build something.
              </h2>

              <p
                ref={addRevealRef}
                className="reveal-up contact-desc"
                data-delay="150"
              >
                I&apos;m always open to new projects, collaborations, and opportunities.
                Whether you have a question or just want to say hi — drop me a line.
              </p>

              {/* Email row */}
              <div ref={addRevealRef} className="reveal-up" data-delay="220">
                <a
                  href="mailto:tahachoudhary54@gmail.com"
                  className="contact-email-row"
                  aria-label="Send email to tahachoudhary54@gmail.com"
                >
                  <span className="contact-email-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </span>
                  <span className="contact-email-text">tahachoudhary54@gmail.com</span>
                  <span className="contact-email-arrow" aria-hidden="true">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>

            {/* ── RIGHT ── Social cards 2×2 */}
            <div className="contact-right">
              <div className="social-cards-grid">

                {/* GitHub */}
                <a
                  ref={addRevealRef}
                  href="https://github.com/tahachoudhary54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card social-card--github reveal-up"
                  data-delay="100"
                  aria-label="Visit Taha's GitHub profile"
                >
                  <div className="social-card-top">
                    <span className="social-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </span>
                    <span className="social-card-arrow" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="social-card-body">
                    <span className="social-card-name">GitHub</span>
                    <span className="social-card-sub">View my repositories &amp; open source work</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  ref={addRevealRef}
                  href="https://www.linkedin.com/in/taha-choudhary-3aa283358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card social-card--linkedin reveal-up"
                  data-delay="180"
                  aria-label="Visit Taha's LinkedIn profile"
                >
                  <div className="social-card-top">
                    <span className="social-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </span>
                    <span className="social-card-arrow" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="social-card-body">
                    <span className="social-card-name">LinkedIn</span>
                    <span className="social-card-sub">Connect with me professionally</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  ref={addRevealRef}
                  href="https://www.instagram.com/taha_choudhary_19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card social-card--instagram reveal-up"
                  data-delay="260"
                  aria-label="Visit Taha's Instagram profile"
                >
                  <div className="social-card-top">
                    <span className="social-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </span>
                    <span className="social-card-arrow" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="social-card-body">
                    <span className="social-card-name">Instagram</span>
                    <span className="social-card-sub">Follow my creative journey</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  ref={addRevealRef}
                  href="https://wa.me/919987343330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card social-card--whatsapp reveal-up"
                  data-delay="340"
                  aria-label="Message Taha on WhatsApp"
                >
                  <div className="social-card-top">
                    <span className="social-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </span>
                    <span className="social-card-arrow" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="social-card-body">
                    <span className="social-card-name">WhatsApp</span>
                    <span className="social-card-sub">Send me a direct message</span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer role="contentinfo">
        <div className="container footer">
          <p className="footer-copy">
            © 2026 Taha Choudhary. All rights reserved. · Mumbai, India
          </p>
          <ul className="footer-links" role="list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>

      {/* ══════════════════════════════════════════
          FLOATING BUTTONS
      ══════════════════════════════════════════ */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/919987343330"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIconLg />
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`back-top ${showBackTop ? "visible" : ""}`}
        aria-label="Back to top"
      >
        <ChevronUp size={18} />
      </button>

      {/* ══════════════════════════════════════════
          CERTIFICATE MODAL
      ══════════════════════════════════════════ */}
      {selectedCert && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate: ${selectedCert.title}`}
        >
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
            >
              ×
            </button>

            <div
              className="cert-modal-img"
              onWheel={handleWheelZoom}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => {}}
              onDoubleClick={() => setCertZoom(1)}
              style={{ cursor: certZoom > 1 ? "grab" : "zoom-in" }}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                style={{
                  transform: `scale(${certZoom})`,
                  transition: "transform 0.2s ease-out",
                }}
              />
            </div>

            <div className="cert-modal-details">
              <h2 className="cert-modal-title" style={{ fontFamily: "var(--font-syne, 'Space Grotesk', sans-serif)" }}>
                {selectedCert.title}
              </h2>
              <p className="cert-modal-issuer">{selectedCert.issuer}</p>
              <p className="cert-modal-date">{selectedCert.date}</p>
              <p className="cert-modal-desc">{selectedCert.description}</p>
              <div className="cert-skill-tags">
                {selectedCert.skills.map((s, i) => (
                  <span key={i} className="cert-skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================
   INLINE SVG ICON COMPONENTS
   ============================================ */
function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ChevronUp({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppIconLg() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}