import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "../data/contactData";

function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: FaGithub, href: contact.github },
    { icon: FaLinkedin, href: contact.linkedin },
    { icon: FaEnvelope, href: `mailto:${contact.email}` },
  ];

  return (
    <footer className="bg-[#060b18] border-t border-slate-800 text-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold">
              <span className="gradient-text">GB</span><span className="text-white">.</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Ruby on Rails Developer</p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-slate-400 hover:text-cyan-400 text-sm transition">
                {l.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4 sm:gap-5">
            {socials.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 transition"
                whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(6,182,212,0.3)" }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-10 pt-5 sm:pt-6 text-center">
          <p className="text-slate-600 text-xs sm:text-sm">
            © 2026 Govind Birajdar · Built with React, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
