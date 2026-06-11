import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload, FaPhone } from "react-icons/fa";
import { contact } from "../data/contactData";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "govind-birajdar",
    href: contact.linkedin,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "govindb123",
    href: contact.github,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone}`,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: contact.location,
    href: null,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

function Contact() {
  return (
    <section id="contact" className="bg-[#0a0f1e] grid-bg text-white py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto leading-8">
            I'm always open to discussing backend development, Ruby on Rails,
            and exciting new opportunities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const Inner = (
              <motion.div
                className={`flex items-center gap-4 p-5 rounded-2xl border ${item.border} ${item.bg} cursor-pointer`}
                whileHover={{
                  rotateY: -5,
                  rotateX: 3,
                  y: -5,
                  boxShadow: "0 15px 40px rgba(6,182,212,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`w-12 h-12 ${item.bg} border ${item.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`${item.color} text-xl`} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{item.label}</p>
                  <p className={`${item.color} font-medium mt-0.5 text-sm`}>{item.value}</p>
                </div>
              </motion.div>
            );

            return (
              <motion.div
                key={item.label}
                className="perspective"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">{Inner}</a>
                ) : (
                  Inner
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={contact.resume}
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.96 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
