import { motion } from "framer-motion";
import { skillCategories } from "../data/skillsData";

function SkillCard({ skill, i }) {
  const Icon = skill.icon;
  return (
    <motion.div
      className="perspective"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06, duration: 0.4 }}
    >
      <motion.div
        className="bg-[#0a0f1e] rounded-lg px-2 sm:px-3 py-3 flex flex-col items-center border border-slate-700 hover:border-cyan-400 cursor-default group"
        whileHover={{ rotateY: -8, rotateX: 4, y: -5, boxShadow: "0 12px 30px rgba(6,182,212,0.2)" }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="p-2 rounded-lg mb-2 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <Icon size={22} style={{ color: skill.color }} />
        </div>
        <span className="text-xs font-medium text-slate-300 text-center leading-tight">{skill.name}</span>
      </motion.div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#0a0f1e] grid-bg text-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-3">What I Use</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-10 md:space-y-14">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-base sm:text-xl font-bold text-cyan-400 whitespace-nowrap">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} i={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
