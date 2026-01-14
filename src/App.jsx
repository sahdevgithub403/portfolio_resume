import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  TerminalSquare,
  Zap,
  Bomb,
  Wrench,
  Star,
  Quote,
} from "lucide-react";

// Importing Components and Data
import {
  portfolioData,
  TITLES,
  SKILLS,
  PROJECTS,
  TIMELINE,
  FAQS,
  TESTIMONIALS,
} from "./components/data";
import {
  ScrollReveal,
  Typewriter,
  BrutalButton,
  BrutalCard,
  Marquee,
} from "./components/UI";
import {
  ToastSystem,
  BugSmasher,
  ExcuseGenerator,
  RunawayButton,
  UselessToggle,
  FAQItem,
} from "./components/Widgets";
import normalImage from "./assets/image1.png";
import winkImage from "./assets/image.png";

const App = () => {
  const [score, setScore] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBroken, setIsBroken] = useState(false);
  const [showBSOD, setShowBSOD] = useState(false);
  const [hackerMode, setHackerMode] = useState(false);
  const [profileHover, setProfileHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const triggerBroken = () => {
    setShowBSOD(true);
    setTimeout(() => {
      setShowBSOD(false);
      setIsBroken(true);
    }, 2500);
  };

  const fixWebsite = () => {
    setIsBroken(false);
    setShowBSOD(false);
    setScore((s) => s + 5);
  };

  return (
    <div
      className={`
      min-h-screen font-mono text-black overflow-x-hidden selection:bg-purple-400 selection:text-white cursor-default transition-all duration-500
      ${hackerMode ? "bg-black text-green-500" : "bg-yellow-50"}
    `}
    >
      {/* BSOD OVERLAY */}
      {showBSOD && (
        <div className="fixed inset-0 z-[110] bg-blue-700 text-white font-mono p-8 md:p-24 flex flex-col justify-center animate-in fade-in duration-75 cursor-none">
          <div className="text-6xl md:text-9xl mb-8">:(</div>
          <h2 className="text-2xl md:text-4xl mb-8">
            Your PC ran into a problem and needs to restart.
          </h2>
          <p className="text-xl mb-4">
            We're just collecting some error info, and then we'll restart for
            you.
          </p>
          <p className="text-xl">0% complete</p>
          <div className="mt-12 p-4 bg-white text-blue-700 w-fit font-bold">
            STOP_CODE: USER_CLICKED_DO_NOT_CLICK
          </div>
        </div>
      )}

      {/* Broken Overlay */}
      {isBroken && !showBSOD && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="bg-white p-8 border-8 border-red-500 shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] max-w-lg text-center transform -rotate-3">
            <h1 className="text-6xl mb-4">🤦‍♂️</h1>
            <h2 className="text-3xl font-black mb-4 uppercase text-red-600">
              Site Crashed!
            </h2>
            <p className="text-xl font-bold mb-8">
              "Kya yaar! 'DO NOT CLICK' bola tha na? <br /> Sab tod diya tune."
            </p>
            <BrutalButton
              onClick={fixWebsite}
              color="bg-green-400"
              className="w-full justify-center"
            >
              <Wrench /> Sorry Bhai, Fix Kardo
            </BrutalButton>
          </div>
        </div>
      )}

      {/* Ghost Cursor */}
      {!hackerMode && !isBroken && !showBSOD && (
        <div
          className="fixed pointer-events-none z-40 text-4xl hidden md:block transition-all duration-100 ease-linear"
          style={{ left: `${mousePos.x + 10}px`, top: `${mousePos.y + 10}px` }}
        >
          👻
        </div>
      )}

      <BugSmasher score={score} setScore={setScore} />
      {!isBroken && !showBSOD && <ToastSystem />}

      {/* Scoreboard */}
      <div
        className={`fixed top-4 right-4 z-50 border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transition-all duration-1000
        ${
          hackerMode
            ? "bg-black text-green-500 border-green-500 shadow-green-900"
            : "bg-white"
        }
        ${isBroken ? "translate-y-[100vh] rotate-45" : ""}`}
      >
        <span className="font-black text-xl">BUGS FIXED: {score}</span>
        {score > 10 && (
          <span className="text-sm text-purple-600 font-bold">
            (Senior Dev!)
          </span>
        )}
        {score > 20 && (
          <span className="text-sm text-red-600 font-bold">(10x Dev!)</span>
        )}
      </div>

      {/* Navigation */}
      <nav
        className={`border-b-4 sticky top-0 z-30 transition-all duration-1000 ${
          hackerMode ? "bg-black border-green-500" : "bg-white border-black"
        } ${isBroken ? "translate-y-[100vh] -rotate-12" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter hover:rotate-3 transition-transform cursor-pointer">
            SAHDEV<span className="text-purple-600">.exe</span>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="#about"
              className="font-bold hover:underline decoration-wavy decoration-purple-500"
            >
              Who?
            </a>
            <a
              href="#projects"
              className="font-bold hover:underline decoration-wavy decoration-blue-500"
            >
              What?
            </a>
            <button
              onClick={() => setHackerMode(!hackerMode)}
              className={`border-2 px-2 py-1 font-bold text-xs flex items-center gap-1 ${
                hackerMode
                  ? "bg-green-500 text-black border-green-500"
                  : "bg-black text-white border-black"
              }`}
            >
              <TerminalSquare size={12} />{" "}
              {hackerMode ? "NORMAL MODE" : "HACKER MODE"}
            </button>
          </div>
        </div>
      </nav>

      {!isBroken && !showBSOD && (
        <Marquee text="HIRE ME BEFORE AI TAKES MY JOB" />
      )}

      {/* MAIN CONTENT WRAPPER */}
      <div
        className={`transition-all duration-1000 ease-in ${
          isBroken ? "transform translate-y-[150vh] rotate-12 opacity-0" : ""
        }`}
      >
        <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
          {/* HERO SECTION */}
          <ScrollReveal>
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div
                  className={`inline-block px-2 py-1 transform -rotate-2 font-bold text-sm ${
                    hackerMode
                      ? "bg-green-500 text-black"
                      : "bg-black text-white"
                  }`}
                >
                  Status: Caffeinated
                </div>
                <h1 className="text-6xl md:text-8xl font-black leading-none drop-shadow-xl">
                  HI, I'M <br />
                  <span
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${
                      hackerMode
                        ? "from-green-400 to-green-600"
                        : "from-purple-500 to-pink-500"
                    }`}
                  >
                    SAHDEV.
                  </span>
                </h1>
                <h2
                  className={`text-2xl font-bold inline-block px-2 transform rotate-1 ${
                    hackerMode ? "bg-green-900 text-green-100" : "bg-yellow-300"
                  }`}
                >
                  <Typewriter words={TITLES} />
                </h2>
                <p
                  className={`text-xl font-medium border-l-4 pl-4 ${
                    hackerMode ? "border-green-500" : "border-black"
                  }`}
                >
                  {portfolioData.bio}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <BrutalButton
                    color={hackerMode ? "bg-green-600" : "bg-purple-400"}
                    onClick={() =>
                      document.getElementById("contact").scrollIntoView()
                    }
                  >
                    Hire Me! <Zap size={18} />
                  </BrutalButton>
                  <BrutalButton
                    color={hackerMode ? "bg-red-900" : "bg-red-200"}
                    onClick={triggerBroken}
                  >
                    <Bomb size={18} /> DO NOT CLICK
                  </BrutalButton>
                </div>
              </div>

              <div className="relative">
                {/* Abstract Portrait */}
                <div className="w-full aspect-square relative">
                  <div
                    className={`absolute inset-0 translate-x-4 translate-y-4 ${
                      hackerMode ? "bg-green-900" : "bg-black"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 border-4 flex items-center justify-center overflow-hidden cursor-crosshair
                        ${
                          hackerMode
                            ? "bg-black border-green-500"
                            : "bg-blue-400 border-black"
                        }`}
                    onMouseEnter={() => setProfileHover(true)}
                    onMouseLeave={() => setProfileHover(false)}
                  >
                    <img
                      // src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${portfolioData.name}&backgroundColor=transparent&clothing=hoodie&eyes=${profileHover ? 'happy' : 'default'}&mouth=${profileHover ? 'smile' : 'default'}`}
                      src={profileHover ? winkImage : normalImage}
                      alt="Me"
                      className={`w-full h-full object-cover transition-transform duration-200 ${
                        hackerMode ? "grayscale contrast-125" : ""
                      }`}
                      style={{
                        transform: profileHover
                          ? "scale(1.1) rotate(5deg)"
                          : "scale(1)",
                      }}
                    />

                    {/* HOVER REVEAL: CHIJ POSE */}
                    {profileHover && (
                      <>
                        <div className="absolute bottom-4 right-8 text-7xl animate-bounce drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20">
                          ✌️
                        </div>
                        <div className="absolute top-8 left-4 bg-white border-2 border-black px-4 py-2 font-black text-xl transform -rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pulse z-20 text-black">
                          CHIJ! 😬
                        </div>
                      </>
                    )}

                    {!profileHover && (
                      <div className="absolute bottom-4 right-4 bg-white px-2 border-2 border-black text-xs font-bold transform rotate-6 text-black">
                        Actually me -&gt;
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* MARQUEE SEPARATOR */}
          <div className="bg-purple-500 text-white font-black text-2xl py-2 -mx-6 transform rotate-1">
            <div className="animate-marquee whitespace-nowrap">
              SCROLL DOWN • IF YOU DARE • I WRITE BUGS • SOMETIMES CODE • HIRE
              ME • SCROLL DOWN •
            </div>
          </div>

          {/* ABOUT SECTION */}
          <ScrollReveal>
            <section id="about" className="relative">
              <div
                className={`absolute -left-12 top-0 text-9xl opacity-10 font-black rotate-90 hidden xl:block ${
                  hackerMode ? "text-green-500" : "text-black"
                }`}
              >
                ABOUT
              </div>

              <h2 className="text-4xl font-black mb-8 flex items-center gap-3">
                <span
                  className={`px-4 py-1 transform -rotate-3 ${
                    hackerMode
                      ? "bg-green-500 text-black"
                      : "bg-black text-white"
                  }`}
                >
                  LEVEL 1:
                </span>{" "}
                THE ORIGIN STORY
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <BrutalCard
                  title="Stats"
                  color={hackerMode ? "bg-green-900" : "bg-orange-100"}
                  rotate="-1deg"
                >
                  <ul className="space-y-4 font-bold">
                    <li
                      className={`flex justify-between border-b-2 border-dashed pb-2 ${
                        hackerMode ? "border-green-500" : "border-black"
                      }`}
                    >
                      <span>Class:</span> <span>Dev</span>
                    </li>
                    <li
                      className={`flex justify-between border-b-2 border-dashed pb-2 ${
                        hackerMode ? "border-green-500" : "border-black"
                      }`}
                    >
                      <span>Level:</span> <span>Noob</span>
                    </li>
                    <li
                      className={`flex justify-between border-b-2 border-dashed pb-2 ${
                        hackerMode ? "border-green-500" : "border-black"
                      }`}
                    >
                      <span>CGPA:</span> <span>8.6</span>
                    </li>
                  </ul>
                </BrutalCard>

                <BrutalCard
                  title="Skills"
                  color={hackerMode ? "bg-green-800" : "bg-blue-100"}
                  rotate="2deg"
                >
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`border-2 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-110 transition-transform cursor-help
                          ${
                            hackerMode
                              ? "bg-black border-green-500 text-green-500"
                              : `${skill.color} border-black text-black`
                          }`}
                        title={skill.name}
                      >
                        {skill.icon} {skill.name.split(" ")[0]}
                      </div>
                    ))}
                  </div>
                </BrutalCard>

                <BrutalCard
                  title="Lore"
                  color={hackerMode ? "bg-green-900" : "bg-green-100"}
                  rotate="-2deg"
                >
                  <p className="text-sm font-medium leading-relaxed">
                    {portfolioData.about}
                  </p>
                </BrutalCard>
              </div>
            </section>
          </ScrollReveal>

          {/* TIMELINE SECTION */}
          <ScrollReveal>
            <section className="relative">
              <h2 className="text-4xl font-black mb-12 text-center uppercase decoration-wavy underline decoration-purple-500">
                The Evolution of a Dev
              </h2>
              <div className="relative border-l-4 border-black ml-4 md:ml-1/2 space-y-12">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-3.5 top-0 w-6 h-6 bg-yellow-400 border-4 border-black rounded-full"></div>
                    <div
                      className={`border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white transform hover:scale-105 transition-transform ${
                        idx % 2 === 0 ? "rotate-1" : "-rotate-1"
                      }`}
                    >
                      <span className="bg-black text-white px-2 py-0.5 text-xs font-bold">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-black mt-1">{item.title}</h3>
                      <p className="font-medium text-sm text-gray-700">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* PHILOSOPHY SECTION */}
          <ScrollReveal>
            <section className="py-12 text-center">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-black to-gray-500 opacity-20 uppercase leading-none select-none">
                CTRL+C <br /> CTRL+V
              </h2>
              <div className="relative -mt-16 z-10">
                <p className="text-2xl md:text-3xl font-black bg-white inline-block px-4 py-2 border-4 border-black transform -rotate-2">
                  "My code doesn't have bugs,"
                </p>
                <br />
                <p className="text-2xl md:text-3xl font-black bg-yellow-300 inline-block px-4 py-2 border-4 border-black transform rotate-1 mt-4">
                  "It has unexpected features."
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* FUN ZONE */}
          <ScrollReveal>
            <section className="py-8 bg-purple-100 border-4 border-black p-6 rounded-3xl relative overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="flex items-center justify-center gap-2 mb-8 relative z-10">
                <h2
                  className={`text-2xl font-black px-4 border-2 transform rotate-2 ${
                    hackerMode
                      ? "bg-black text-green-500 border-green-500"
                      : "bg-white text-black border-black"
                  }`}
                >
                  DEBUGGING TOOLS
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
                <ExcuseGenerator />
                <UselessToggle />
              </div>
            </section>
          </ScrollReveal>

          {/* PROJECTS SECTION */}
          <ScrollReveal>
            <section id="projects">
              <h2 className="text-4xl font-black mb-8 flex items-center gap-3 justify-end">
                <span
                  className={`px-4 py-1 transform rotate-2 ${
                    hackerMode
                      ? "bg-green-500 text-black"
                      : "bg-black text-white"
                  }`}
                >
                  LEVEL 2:
                </span>{" "}
                THE CREATIONS
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, idx) => (
                  <div key={idx} className="relative group">
                    <div
                      className={`absolute inset-0 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform ${
                        hackerMode ? "bg-green-900" : "bg-black"
                      }`}
                    ></div>
                    <div
                      className={`relative border-4 p-6 h-full flex flex-col ${
                        hackerMode
                          ? "bg-black border-green-500"
                          : `${project.color} border-black`
                      }`}
                    >
                      <h3 className="text-2xl font-black mb-2 uppercase">
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm font-medium mb-4 flex-grow border-t-2 pt-2 border-dashed ${
                          hackerMode ? "border-green-500" : "border-black"
                        }`}
                      >
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`border-2 text-xs px-2 py-0.5 font-bold ${
                              hackerMode
                                ? "bg-green-900 text-green-100 border-green-500"
                                : "bg-white border-black"
                            }`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        className={`text-center py-2 font-bold transition-colors flex items-center justify-center gap-2 ${
                          hackerMode
                            ? "bg-green-500 text-black hover:bg-green-400"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        <Github size={16} /> View Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* TESTIMONIALS SECTION */}
          <ScrollReveal>
            <section id="testimonials" className="py-12">
              <div
                className={`border-4 p-8 relative ${
                  hackerMode
                    ? "bg-green-900 border-green-500 text-green-100"
                    : "bg-yellow-200 border-black"
                }`}
              >
                <h2 className="text-3xl font-black mb-8 text-center uppercase flex items-center justify-center gap-2">
                  <Star fill="currentColor" /> Totally Real Reviews{" "}
                  <Star fill="currentColor" />
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {TESTIMONIALS.map((t, idx) => (
                    <div
                      key={idx}
                      className={`bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                        idx % 2 === 0 ? "rotate-1" : "-rotate-1"
                      } hover:rotate-0 transition-transform`}
                    >
                      <Quote size={24} className="mb-2 opacity-50 text-black" />
                      <p className="text-lg font-bold mb-2 text-black">
                        "{t.quote}"
                      </p>
                      <div className="flex justify-between items-center border-t-2 border-black pt-2 mt-2">
                        <span className="font-black text-black">{t.name}</span>
                        <span className="text-xs uppercase bg-black text-white px-2 py-1">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* FAQ SECTION */}
          <ScrollReveal>
            <section className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-8 text-center bg-black text-white inline-block px-4 py-1 transform -rotate-1">
                FAQ (Frequently Avoided Questions)
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <FAQItem key={idx} q={faq.q} a={faq.a} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* CONTACT SECTION */}
          <ScrollReveal>
            <section id="contact" className="py-12">
              <div
                className={`border-4 p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden ${
                  hackerMode
                    ? "bg-black border-green-500 shadow-green-900"
                    : "bg-purple-500 border-black"
                }`}
              >
                {!hackerMode && (
                  <>
                    <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400 rounded-full border-4 border-black -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 transform rotate-45 border-4 border-black translate-x-1/2 translate-y-1/2"></div>
                  </>
                )}

                <h2
                  className={`text-4xl md:text-6xl font-black mb-6 relative z-10 stroke-black stroke-2 ${
                    hackerMode ? "text-green-500" : "text-white"
                  }`}
                  style={!hackerMode ? { textShadow: "4px 4px 0 #000" } : {}}
                >
                  READY TO START?
                </h2>
                <p
                  className={`font-bold text-xl mb-8 max-w-xl mx-auto relative z-10 p-2 transform -rotate-1 ${
                    hackerMode
                      ? "bg-green-900 text-green-100"
                      : "bg-black text-white"
                  }`}
                >
                  Send me an email. I promise I won't reply with ChatGPT.
                </p>

                <div className="relative z-10 flex justify-center gap-4 flex-wrap">
                  <BrutalButton
                    color={hackerMode ? "bg-green-500" : "bg-white"}
                    onClick={() =>
                      (window.location.href = `mailto:${portfolioData.email}`)
                    }
                  >
                    <Mail /> Email Me
                  </BrutalButton>
                  <RunawayButton />
                </div>
              </div>
            </section>
          </ScrollReveal>
        </main>

        <footer
          className={`py-12 text-center border-t-4 ${
            hackerMode
              ? "bg-black border-green-500 text-green-500"
              : "bg-black border-purple-500 text-white"
          }`}
        >
          <p className="font-bold text-lg mb-2">
            Made with <span className="animate-pulse">❤️</span>, too much ☕,
            and tears by Sahdev Puran.
          </p>
          <p className="text-xs opacity-50 font-mono">
            © {new Date().getFullYear()} - All bugs reserved.
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
