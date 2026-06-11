import { motion } from "framer-motion";
import { experiences } from "../data/experienceData";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="bg-[#0d1224] grid-bg text-white py-28">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="md:pl-20 relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-8 w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#0d1224] hidden md:flex items-center justify-center glow-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <motion.div
                  className="bg-[#0a0f1e] rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/60 transition-all duration-300"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 50px rgba(6,182,212,0.15)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-3">
                        <FaBriefcase size={10} /> {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <h4 className="text-cyan-400 font-medium mt-1">{exp.company}</h4>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, j) => (
                      <motion.li
                        key={item}
                        className="flex gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 }}
                      >
                        <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
