import { useEffect, useState } from "react";

const certificates = [
  {
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    date: "2026",
    tag: "AI Fluency",
    image: "/certificates/teaching-ai-fluency-framework.png",




    
    description:
      "Completed advanced learning focused on teaching AI fluency concepts, responsible usage, and practical classroom integration.",
    skills: ["AI Fluency", "Teaching", "Prompting", "AI Literacy"],
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    tag: "Foundations",
    image: "/certificates/ai-fluency-framework-foundations.png",
    description:
      "Built foundational understanding of AI fluency, core frameworks, and practical thinking for human-AI collaboration.",
    skills: ["Foundations", "Frameworks", "AI Thinking", "Collaboration"],
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    tag: "Claude",
    image: "/certificates/claude-101.png",
    description:
      "Learned the basics of working effectively with Claude for writing, ideation, structured prompting, and productivity.",
    skills: ["Claude", "Prompting", "Writing", "Productivity"],
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "2026",
    tag: "Students",
    image: "/certificates/ai-fluency-for-students.png",
    description:
      "Explored student-focused AI fluency practices including responsible use, learning support, and critical thinking.",
    skills: ["Students", "AI Literacy", "Responsible AI", "Learning"],
  },
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic",
    date: "2026",
    tag: "Nonprofits",
    image: "/certificates/ai-fluency-for-nonprofits.png",
    description:
      "Learned how AI can support nonprofit work through better communication, planning, and mission-driven workflows.",
    skills: ["Nonprofits", "Communication", "Planning", "AI Workflows"],
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    date: "2026",
    tag: "Educators",
    image: "/certificates/ai-fluency-for-educators.png",
    description:
      "Focused on practical AI usage for educators, including teaching support, content creation, and thoughtful adoption.",
    skills: ["Educators", "Content Creation", "AI Tools", "Teaching Support"],
  },
  {
    title: "Yuva AI For ALL - English",
    issuer: "AISECT Learn (INDIAai)",
    date: "January 21, 2026",
    tag: "AI Program",
    image: "/certificates/yuva-ai-for-all.png",
    description:
      "Successfully completed a structured AI learning program covering basic AI concepts, awareness, and applications.",
    skills: ["AI Fundamentals", "AI Applications", "Machine Learning Basics"],
  },
  {
    title: "AI For All - AI Appreciate Stage",
    issuer: "Intel & Digital India",
    date: "January 12, 2026",
    tag: "Participation",
    image: "/certificates/ai-for-all-appreciate-stage.png",
    description:
      "Completed the AI Appreciate stage focused on AI awareness, digital literacy, and emerging technology understanding.",
    skills: ["AI Awareness", "Digital Literacy", "Technology Trends"],
  },
];

const Portfolio = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
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

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
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
            {["home", "about", "certificates", "resume", "portfolio"].map((item) => (
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
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white to-background"
      >
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

      {/* Certificates Section */}
      <section
        id="certificates"
        className="py-24 px-6 bg-gradient-to-b from-background via-white to-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 fade-in">
            <p className="text-sm tracking-[3px] uppercase text-slate-500 mb-4">
              Certifications
            </p>

            <h2 className="section-title text-5xl md:text-6xl font-black uppercase leading-tight mb-6">
              Learning Journey & Achievements
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              A curated collection of certifications that reflect my continuous
              learning in AI, digital skills, and emerging technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="fade-in group bg-white border border-primary/10 rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="relative overflow-hidden bg-gradient-to-br from-accent/30 to-background block w-full text-left"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-[240px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </button>

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-[1.5px] uppercase">
                      {certificate.tag}
                    </span>

                    <span className="text-sm text-slate-400">
                      {certificate.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-textDark leading-snug mb-3 min-h-[72px]">
                    {certificate.title}
                  </h3>

                  <p className="text-slate-500 mb-3">
                    Issued by {certificate.issuer}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {certificate.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {certificate.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/5 text-primary/70 text-xs font-medium tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedCertificate(certificate)}
                      className="flex-1 px-6 py-4 btn-primary-gradient text-white font-bold tracking-[1.5px] uppercase rounded-full shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                      View Certificate
                    </button>

                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-4 border border-primary/20 text-slate-600 font-bold tracking-[1.5px] uppercase rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      Open
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl animate-[fadeIn_.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-primary/10">
              <div>
                <p className="text-xs tracking-[2px] uppercase text-slate-400 mb-1">
                  Certificate Preview
                </p>
                <h3 className="text-2xl font-bold text-textDark">
                  {selectedCertificate.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="w-12 h-12 rounded-full border border-primary/10 text-slate-500 text-xl hover:bg-accent/30 transition-all"
              >
                ×
              </button>
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-br from-background via-white to-accent/20 max-h-[80vh] overflow-auto">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto rounded-[20px] border border-primary/10 shadow-lg"
              />
            </div>

            <div className="px-6 pb-6 flex flex-wrap gap-4">
              <a
                href={selectedCertificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 btn-primary-gradient text-white font-bold tracking-[1.5px] uppercase rounded-full shadow-lg hover:-translate-y-1 transition-all"
              >
                Open in New Tab
              </a>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="px-8 py-4 border-2 border-accent text-slate-500 font-bold tracking-[1.5px] uppercase rounded-full hover:border-primary hover:text-primary transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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