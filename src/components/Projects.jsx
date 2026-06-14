import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects, personalProjects } from "../data/projectsData";
import { FaCode, FaGithub, FaExternalLinkAlt, FaArrowRight, FaServer, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ── Professional card ── */
function ProfessionalCard({ project }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="carousel-card flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start perspective"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="h-full rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/60 flex flex-col cursor-default"
        whileHover={{ rotateY: -5, rotateX: 3, boxShadow: "0 25px 60px rgba(6,182,212,0.25)" }}
        transition={{ type: "spring", stiffness: 160 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          {project.images ? (
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
              {project.images.map((src, idx) => (
                <div key={idx} className="overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-105" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0d1224]" />
          <div className="absolute top-3 left-3 w-9 h-9 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-xl flex items-center justify-center">
            <FaCode className="text-cyan-400 text-xs" />
          </div>
        </div>

        <div className="bg-[#0d1224] p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-white mb-0.5">{project.title}</h3>
          <p className="text-cyan-400 text-xs font-medium mb-3">{project.role}</p>
          <p className="text-slate-400 text-xs leading-6 flex-1 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span key={tech} className="bg-slate-800 border border-slate-600 px-2 py-0.5 rounded-full text-xs text-slate-300">
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="bg-slate-800 border border-slate-600 px-2 py-0.5 rounded-full text-xs text-slate-400">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
          <motion.button
            onClick={() => navigate(`/project/${project.slug}`)}
            className="mt-4 w-full flex items-center justify-center gap-2 border border-cyan-500/40 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 py-3 rounded-xl text-sm font-medium transition-all"
            whileTap={{ scale: 0.97 }}
          >
            View Details <FaArrowRight className="text-xs" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Personal card ── */
function PersonalCard({ project }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="carousel-card flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start perspective"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="h-full relative rounded-2xl overflow-hidden flex flex-col cursor-default"
        whileHover={{ rotateY: -5, rotateX: 3, boxShadow: "0 25px 60px rgba(139,92,246,0.3)" }}
        transition={{ type: "spring", stiffness: 160 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-purple-500/50 via-cyan-500/20 to-purple-500/50 z-0">
          <div className="w-full h-full rounded-2xl bg-[#0d1224]" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="relative h-48 overflow-hidden rounded-t-2xl flex-shrink-0">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/30 to-[#0d1224]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-400/80 to-transparent" />
            <div className="absolute top-3 left-3 w-9 h-9 bg-purple-500/20 backdrop-blur-sm border border-purple-500/40 rounded-xl flex items-center justify-center">
              <FaCode className="text-purple-400 text-xs" />
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-base font-bold text-white mb-0.5">{project.title}</h3>
            <p className="text-purple-400 text-xs font-medium mb-3">{project.role}</p>
            <p className="text-slate-400 text-xs leading-6 flex-1 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-2 py-0.5 rounded-full text-xs">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-2 py-0.5 rounded-full text-xs">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            <div className="flex gap-2 mt-4 flex-wrap">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 bg-slate-800 border border-slate-600 hover:border-purple-500/60 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.githubBackend && (
                <a href={project.githubBackend} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 bg-slate-800 border border-slate-600 hover:border-purple-500/60 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all">
                  <FaGithub /> Backend
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition-all">
                  <FaExternalLinkAlt className="text-sm" /> Live
                </a>
              )}
              {project.backend && (
                <a href={project.backend} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1.5 bg-slate-800 border border-emerald-500/40 text-emerald-400 px-4 py-2 rounded-lg text-sm transition-all">
                  <FaServer className="text-xs" /> Backend
                </a>
              )}
            </div>

            <motion.button
              onClick={() => navigate(`/project/${project.slug}`)}
              className="mt-3 w-full flex items-center justify-center gap-2 border border-purple-500/40 hover:border-purple-400 text-purple-400 hover:bg-purple-500/10 py-3 rounded-xl text-sm font-medium transition-all"
              whileTap={{ scale: 0.97 }}
            >
              View Details <FaArrowRight className="text-xs" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Carousel wrapper ── */
function Carousel({ items, renderCard, accentColor }) {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const getCardWidth = () => {
    if (!scrollRef.current) return 0;
    const card = scrollRef.current.querySelector(".carousel-card");
    return card ? card.offsetWidth + 24 : 0; // offsetWidth + gap-6
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = getCardWidth();
    const visibleCount = w > 0 ? Math.round(el.offsetWidth / w) : 1;
    el.scrollBy({ left: dir * w * visibleCount, behavior: "smooth" });
    setActiveIdx((prev) => Math.min(Math.max(prev + dir * visibleCount, 0), items.length - 1));
  };

  const scrollTo = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * getCardWidth(), behavior: "smooth" });
    setActiveIdx(idx);
  };

  return (
    <div className="relative px-8">
      {/* Left arrow */}
      <button
        onClick={() => scroll(-1)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-800 border ${accentColor === "cyan" ? "border-cyan-500/40 hover:border-cyan-400 text-cyan-400" : "border-purple-500/40 hover:border-purple-400 text-purple-400"} flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
      >
        <FaChevronLeft className="text-xs" />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const w = getCardWidth();
          if (w) setActiveIdx(Math.round(e.target.scrollLeft / w));
        }}
      >
        {items.map((item, i) => renderCard(item, i))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll(1)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-800 border ${accentColor === "cyan" ? "border-cyan-500/40 hover:border-cyan-400 text-cyan-400" : "border-purple-500/40 hover:border-purple-400 text-purple-400"} flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
      >
        <FaChevronRight className="text-xs" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${i === activeIdx
              ? accentColor === "cyan" ? "w-6 h-2 bg-cyan-400" : "w-6 h-2 bg-purple-400"
              : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#0a0f1e] grid-bg text-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Professional Projects ── */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-3">Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.p
          className="text-center text-slate-400 max-w-3xl mx-auto leading-8 mb-12 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Products and platforms I contributed to during my professional experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-20 md:mb-28"
        >
          <Carousel
            items={projects}
            accentColor="cyan"
            renderCard={(project, i) => <ProfessionalCard key={project.slug} project={project} i={i} />}
          />
        </motion.div>

        {/* ── Personal Projects ── */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm font-medium mb-3">Side Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.p
          className="text-center text-slate-400 max-w-3xl mx-auto leading-8 mb-12 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Projects I've built on my own to explore ideas, learn new tech, and solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Carousel
            items={personalProjects}
            accentColor="purple"
            renderCard={(project, i) => <PersonalCard key={project.slug} project={project} i={i} />}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
