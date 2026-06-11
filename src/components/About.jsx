import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

const stats = [
  {
    value: "2.6+",
    label: "Years Experience",
  },
  {
    value: "5+",
    label: "Products Delivered",
  },
  {
    value: "Full Stack",
    label: "Development",
  },
  {
    value: "Production",
    label: "Applications",
  },
];

const aboutContent = [
  "I enjoy turning ideas into reliable software by building applications that are scalable, maintainable, and focused on solving real-world problems.",

  "From designing backend systems to contributing across the full stack, I enjoy working on features that improve performance, usability, and the overall user experience.",

  "I'm passionate about continuous learning, clean code, and collaborating with teams to build high-quality products that make a meaningful impact.",
];

function About() {
  return (
    <section
      id="about"
      className="bg-[#0d1224] grid-bg text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold
            mb-3
            "
          >
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Turning Ideas Into{" "}
            <span className="gradient-text">
              Reliable Software
            </span>
          </h2>

          <div className="
          w-24
          h-1
          bg-gradient-to-r
          from-cyan-500
          to-purple-500
          mx-auto
          mt-5
          rounded-full
          " />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-3">
              Ruby on Rails Developer
            </h3>

            <p className="text-cyan-400 text-lg mb-8">
              Backend Specialist • Full Stack Developer
            </p>

            {aboutContent.map((para, i) => (
              <motion.p
                key={i}
                className="
                text-slate-400
                leading-8
                mb-5
                text-lg
                "
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {para}
              </motion.p>
            ))}

          </motion.div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="perspective"
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  className="
                  bg-[#0a0f1e]
                  p-8
                  rounded-2xl
                  border
                  border-slate-700
                  hover:border-cyan-400
                  transition-all
                  duration-300
                  cursor-default
                  "
                  whileHover={{
                    rotateY: -8,
                    rotateX: 4,
                    y: -8,
                    boxShadow:
                      "0 20px 50px rgba(6,182,212,0.2)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <h4 className="
                  text-cyan-400
                  text-3xl
                  md:text-4xl
                  font-extrabold
                  ">
                    {stat.value}
                  </h4>

                  <p className="
                  mt-3
                  text-slate-300
                  text-sm
                  ">
                    {stat.label}
                  </p>

                </motion.div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;