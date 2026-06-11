import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen hero-bg grid-bg text-white flex items-center relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-cyan-400 text-lg font-medium mb-3 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <span className="gradient-text">Govind</span>
              <br />
              <span className="text-white">Birajdar</span>
            </motion.h1>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <TypeAnimation
                sequence={[
                  "Ruby on Rails Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "ROR Developer",
                  2000,
                  "Full Stack ROR Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="h2"
                className="text-2xl md:text-3xl text-cyan-400 font-semibold"
              />
            </motion.div>

            <motion.p
              className="mt-6 max-w-xl text-base md:text-lg text-slate-400 leading-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Ruby on Rails Developer with 2.6+ years of professional experience building scalable backend systems, RESTful APIs, and full stack web applications.
               Passionate about creating reliable, production-ready software and delivering high-quality user experiences <span className="text-cyan-400 font-semibold">2.6+ years</span> of professional experience.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/40"
              >
                View Projects
              </a>
              <a
                href="/govind_Birajdar_ROR.pdf"
                download
                className="border border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 px-7 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <a
                href="https://github.com/govindb123"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/govind-birajdar-26655123b/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 text-2xl transition"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — 3D floating image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative float-anim">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 blur-2xl scale-110" />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyan-500/40 overflow-hidden relative glow-pulse">
                <img
                  src={heroImg}
                  alt="Govind Birajdar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-slate-800 border border-cyan-500/40 rounded-xl px-4 py-2 text-sm font-semibold text-cyan-400"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                2.6+ Yrs Exp
              </motion.div>
              <motion.div
                className="absolute -top-4 -left-4 bg-slate-800 border border-purple-500/40 rounded-xl px-4 py-2 text-sm font-semibold text-purple-400"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                RoR Expert
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-slate-500 text-xs">Scroll Down</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
