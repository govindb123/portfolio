import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, personalProjects } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaServer } from "react-icons/fa";

/* Detect if a feature line is a section header (has emoji + caps) or a bullet */
function FeatureItem({ item }) {
  const isSectionHeader = /^[^\w\s•]/.test(item) && !item.startsWith("•");
  const isBullet = item.startsWith("•");
  const text = isBullet ? item.slice(1).trim() : item;

  if (isSectionHeader) {
    return (
      <div className="mt-5 mb-2 first:mt-0">
        <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">{item}</span>
      </div>
    );
  }

  return (
    <li className="flex items-start gap-3 text-slate-300 text-sm py-1">
      <FaCheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0 text-xs" />
      <span className="leading-6">{text}</span>
    </li>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const allProjects = [...projects, ...personalProjects];
  const project = allProjects.find((p) => p.slug === slug);

  const isPersonal = project?.type === "personal";
  const accent = isPersonal ? "text-purple-400" : "text-cyan-400";
  const accentBorder = isPersonal ? "border-purple-500/30" : "border-cyan-500/30";
  const accentBg = isPersonal ? "bg-purple-500/10" : "bg-cyan-500/10";
  const accentText = isPersonal ? "text-purple-300" : "text-cyan-300";
  const glowColor = isPersonal ? "rgba(139,92,246,0.15)" : "rgba(6,182,212,0.15)";
  const spotlightColor = isPersonal ? "via-purple-400/80" : "via-cyan-400/80";

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <button onClick={handleBack} className="text-cyan-400 hover:underline">← Go back</button>
        </div>
      </div>
    );
  }

  const bannerImage = project.images ? project.images[0] : project.image;

  return (
    <div className="min-h-screen bg-[#0a0f1e] grid-bg text-white">
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">

        {/* Back */}
        <motion.button
          onClick={handleBack}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition mb-10 group text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Hero banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-10 h-56 md:h-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.images ? (
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
              {project.images.map((src, idx) => (
                <div key={idx} className="overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <img src={bannerImage} alt={project.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/50 to-transparent" />
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent ${spotlightColor} to-transparent`} />
          <div className="absolute bottom-6 left-6 right-6">
            <span className={`${accent} text-xs uppercase tracking-widest font-medium`}>
              {isPersonal ? "Personal Project" : "Professional Project"}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-1 gradient-text">{project.title}</h1>
            <p className="text-slate-300 text-sm mt-1">{project.role}</p>
          </div>
        </motion.div>

        {/* Tech + links */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className={`${accentBg} border ${accentBorder} ${accentText} px-3 py-1 rounded-full text-xs`}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <motion.a
                href={project.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-slate-800 border border-slate-600 hover:border-purple-500/60 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(139,92,246,0.3)" }}
              >
                <FaGithub /> GitHub
              </motion.a>
            )}
            {project.githubBackend && (
              <motion.a
                href={project.githubBackend} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-slate-800 border border-slate-600 hover:border-purple-500/60 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(139,92,246,0.3)" }}
              >
                <FaGithub /> GitHub Backend
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(139,92,246,0.5)" }}
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </motion.a>
            )}
            {project.backend && (
              <motion.a
                href={project.backend} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-slate-800 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(16,185,129,0.3)" }}
              >
                <FaServer className="text-xs" /> Backend
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Render notice - frontend */}
        {project.renderNotice && (
          <motion.div
            className="flex items-start gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-4 py-3 mb-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-yellow-400 text-base">⚠️</span>
            <p className="text-yellow-400/80 leading-6">
              Hosted on <span className="font-semibold text-yellow-400">Render</span> free tier — may take
              <span className="font-semibold text-yellow-400"> 30–40 seconds</span> to load on first visit due to cold start.
            </p>
          </motion.div>
        )}

        {/* Render notice - backend */}
        {project.backend && (
          <motion.div
            className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-4 py-3 mb-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <FaServer className="text-emerald-400 mt-1 flex-shrink-0" />
            <p className="text-emerald-400/80 leading-6">
              Backend hosted on <span className="font-semibold text-emerald-400">Render</span> free tier — may take
              <span className="font-semibold text-emerald-400"> 40–50 seconds</span> to start on first request.
              If the backend URL shows a white screen, the <span className="font-semibold text-emerald-400">Nakama server is running</span> and ready to accept connections.
            </p>
          </motion.div>
        )}

        {/* Custom note */}
        {project.note && (
          <motion.div
            className="flex items-start gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl px-4 py-3 mb-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-yellow-400 text-base">⚠️</span>
            <p className="text-yellow-400/80 leading-6">{project.note.text}</p>
          </motion.div>
        )}

        {/* Overview full width */}
        {project.overview && (
          <motion.div
            className={`bg-[#0d1224] rounded-2xl p-6 border border-slate-700 hover:${accentBorder} transition-all duration-300 mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ boxShadow: `0 16px 40px ${glowColor}` }}
          >
            <h2 className={`text-base font-bold ${accent} mb-3 uppercase tracking-wider`}>Overview</h2>
            <p className="text-slate-400 leading-8 text-sm">{project.overview}</p>
          </motion.div>
        )}

        {/* Features + Challenges side by side */}
        <div className="grid md:grid-cols-2 gap-8">

          {project.features?.length > 0 && (
            <motion.div
              className="bg-[#0d1224] rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ boxShadow: "0 16px 40px rgba(6,182,212,0.12)" }}
            >
              <h2 className="text-base font-bold text-cyan-400 mb-4 uppercase tracking-wider">Key Features</h2>
              <ul className="space-y-0.5">
                {project.features.map((f, i) => (
                  <FeatureItem key={i} item={f} />
                ))}
              </ul>
            </motion.div>
          )}

          {project.challenges && (
            <motion.div
              className={`bg-[#0d1224] rounded-2xl p-6 border border-slate-700 hover:${accentBorder} transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ boxShadow: `0 16px 40px ${glowColor}` }}
            >
              <h2 className={`text-base font-bold ${accent} mb-3 uppercase tracking-wider`}>Challenges & Learnings</h2>
              <p className="text-slate-400 leading-8 text-sm">{project.challenges}</p>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProjectDetail;
