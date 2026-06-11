import { motion } from "framer-motion";
import { highlights, education, certifications } from "../data/achievementsData";

function Achievements() {
  return (
    <section id="achievements" className="bg-[#0d1224] grid-bg text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-3">
            At A Glance
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Education & <span className="gradient-text">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Highlights */}
          <motion.div
            className="bg-[#0a0f1e] rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-6">Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="text-center p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/40 transition-all duration-300"
                  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(6,182,212,0.15)" }}
                >
                  <h4 className="text-2xl font-extrabold text-cyan-400">{item.value}</h4>
                  <p className="text-slate-400 text-xs mt-2">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-[#0a0f1e] rounded-2xl p-8 border border-slate-700 hover:border-purple-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-purple-400 mb-6">Education</h3>
            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.title} className="border-l-2 border-purple-500/40 pl-4">
                  <h4 className="font-semibold text-sm text-white">{item.title}</h4>
                  <p className="text-slate-400 text-xs mt-1">{item.subtitle}</p>
                  <p className="text-purple-400 text-xs mt-1 font-medium">{item.extra}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="bg-[#0a0f1e] rounded-2xl p-8 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-6">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Achievements;
