import { motion } from "framer-motion";
import { projects, personalProjects } from "../data/projectsData";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ── Professional card with background image ── */
function ProfessionalCard({ project, i }) {
  return (
    <motion.div
      className="perspective"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="h-full rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/60 flex flex-col cursor-default relative"
        whileHover={{ rotateY: -6, rotateX: 3, y: -10, boxShadow: "0 30px 70px rgba(6,182,212,0.25)" }}
        transition={{ type: "spring", stiffness: 160 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background image / collage */}
        <div className="relative h-44 overflow-hidden">
          {project.images ? (
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
              {project.images.map((src, idx) => (
                <div key={idx} className="overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-500"
            />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0d1224]" />
          {/* Icon badge */}
          <div className="absolute top-4 left-4 w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-xl flex items-center justify-center">
            <FaCode className="text-cyan-400 text-sm" />
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#0d1224] p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
          <p className="text-cyan-400 text-xs font-medium mb-3">{project.role}</p>
          <p className="text-slate-400 leading-7 text-sm flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span key={tech} className="bg-slate-800 border border-slate-600 px-3 py-1 rounded-full text-xs text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Personal card with background image + buttons ── */
function PersonalCard({ project, i }) {
  return (
    <motion.div
      className="perspective"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.12, duration: 0.5 }}
    >
      <motion.div
        className="h-full relative rounded-2xl overflow-hidden flex flex-col cursor-default"
        whileHover={{ rotateY: -8, rotateX: 4, y: -12, boxShadow: "0 30px 80px rgba(139,92,246,0.35), 0 0 40px rgba(6,182,212,0.1)" }}
        transition={{ type: "spring", stiffness: 160 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glowing gradient border */}
        <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-purple-500/50 via-cyan-500/20 to-purple-500/50 z-0">
          <div className="w-full h-full rounded-2xl bg-[#0d1224]" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Background image */}
          <div className="relative h-44 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-500"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black/40 to-[#0d1224]" />
            {/* Spotlight top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-400/80 to-transparent" />
            {/* Icon badge */}
            <div className="absolute top-4 left-4 w-10 h-10 bg-purple-500/20 backdrop-blur-sm border border-purple-500/40 rounded-xl flex items-center justify-center">
              <FaCode className="text-purple-400 text-sm" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
            <p className="text-purple-400 text-xs font-medium mb-3">{project.role}</p>
            <p className="text-slate-400 leading-7 text-sm flex-1">{project.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            {(project.github || project.live) && (
              <div className="flex gap-3 mt-5">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-purple-500/60 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                    whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(139,92,246,0.3)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(139,92,246,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </motion.a>
                )}
              </div>
            )}

            {/* Render cold start notice */}
            {project.renderNotice && (
              <div className="mt-4 flex items-start gap-2 bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-4 py-3">
                <span className="text-yellow-400 text-base mt-0.5">⚠️</span>
                <p className="text-yellow-400/80 text-xs leading-5">
                  Hosted on <span className="font-semibold text-yellow-400">Render</span> free tier — may take
                  <span className="font-semibold text-yellow-400"> 30–40 seconds</span> to load on first visit due to cold start.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-[#0a0f1e] grid-bg text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Professional Projects ── */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.p
          className="text-center text-slate-400 max-w-3xl mx-auto leading-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Products and platforms I contributed to during my professional experience.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-28">
          {projects.map((project, i) => (
            <ProfessionalCard key={project.title} project={project} i={i} />
          ))}
        </div>

        {/* ── Personal Projects ── */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-widest text-sm font-medium mb-3">Side Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.p
          className="text-center text-slate-400 max-w-3xl mx-auto leading-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Projects I've built on my own to explore ideas, learn new tech, and solve real problems.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {personalProjects.map((project, i) => (
            <PersonalCard key={project.title} project={project} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
