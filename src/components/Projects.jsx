import { motion } from "framer-motion";
import { projects, personalProjects } from "../data/projectsData";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, i, color }) {
  return (
    <motion.div
      className="perspective"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <motion.div
        className="h-full bg-[#0d1224] rounded-2xl p-7 border border-slate-700 hover:border-cyan-400/60 flex flex-col cursor-default"
        whileHover={{
          rotateY: -6,
          rotateX: 3,
          y: -8,
          boxShadow: "0 25px 60px rgba(6,182,212,0.18)",
        }}
        transition={{ type: "spring", stiffness: 180 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Icon */}
        <div className={`w-12 h-12 ${color.bg} ${color.border} border rounded-xl flex items-center justify-center mb-5`}>
          <FaCode className={`${color.icon} text-xl`} />
        </div>

        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className={`${color.icon} text-sm font-medium mb-4`}>{project.role}</p>
        <p className="text-slate-400 leading-7 text-sm flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 border border-slate-600 px-3 py-1 rounded-full text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links — only for personal projects */}
        {(project.github || project.live) && (
          <div className="flex gap-4 mt-5 pt-4 border-t border-slate-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

const professionalColor = {
  bg: "bg-cyan-500/10",
  border: "border-cyan-500/20",
  icon: "text-cyan-400",
};

const personalColor = {
  bg: "bg-purple-500/10",
  border: "border-purple-500/20",
  icon: "text-purple-400",
};

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
            <ProjectCard key={project.title} project={project} i={i} color={professionalColor} />
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
            <ProjectCard key={project.title} project={project} i={i} color={personalColor} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
