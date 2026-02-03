import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "shadow-primary/10", "bg-white/98");
      } else {
        navbar.classList.remove("shadow-lg", "shadow-primary/10", "bg-white/98");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });

    // Progress bar animation
    const progressBars = document.querySelectorAll(".progress-gradient");
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = "0%";
            setTimeout(() => {
              entry.target.style.width = width;
            }, 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    progressBars.forEach((bar) => progressObserver.observe(bar));

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-background text-textDark overflow-x-hidden">
      {/* Navigation */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-sm font-bold tracking-widest text-slate-500">
            TC
          </div>

          <div className="flex gap-12">
            {["home", "about", "resume", "portfolio"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="nav-link relative text-slate-500 font-semibold text-[13px] tracking-[1.5px] uppercase transition-all duration-300 py-2 hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-background via-accent/30 to-background flex items-center justify-center px-6"
      >
        <div className="max-w-5xl text-center z-10">
          <h1 className="hero-title text-8xl md:text-9xl font-black uppercase leading-none mb-4 fade-in">
            TAHA <br /> CHOUDHARY
          </h1>

          <p className="text-2xl font-light tracking-[8px] uppercase text-slate-500 mb-12 fade-in delay-200">
            UI/UX Designer
          </p>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12 fade-in delay-300">
            Crafting exceptional digital experiences through thoughtful design
            and meticulous attention to detail.
          </p>

          <div className="flex flex-wrap justify-center gap-6 fade-in delay-400">
            <button className="px-12 py-5 btn-primary-gradient text-white font-bold tracking-[2px] uppercase rounded-full shadow-lg hover:-translate-y-1 transition-all">
              View My Work
            </button>

            <button className="px-12 py-5 border-2 border-accent text-slate-500 font-bold tracking-[2px] uppercase rounded-full hover:border-primary hover:text-primary transition-all">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
          <div className="h-[600px] flex items-center justify-center bg-gradient-to-br from-accent to-background fade-in">
            <span className="text-8xl opacity-20">👤</span>
          </div>

          <div className="flex items-center px-12 py-16 fade-in delay-200">
            <div className="max-w-xl">
              <p className="text-sm tracking-[3px] uppercase text-slate-500 mb-4">
                About Me
              </p>

              <h2 className="section-title text-5xl font-black uppercase mb-8">
                Creating Digital Excellence
              </h2>

              <p className="text-slate-600 mb-6">
                I'm Taha Choudhary, a passionate UI/UX Designer focused on creating
                intuitive and impactful digital products.
              </p>

              <button className="px-12 py-5 btn-primary-gradient text-white font-bold tracking-[2px] uppercase rounded-full shadow-lg">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-accent bg-white text-center">
        <p className="text-slate-400 text-sm">
          © 2026 Taha Choudhary. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
//https://portfolio-taha-production.up.railway.app/