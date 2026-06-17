import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";

const responses = [
  {
    keys: ["skill", "tech", "know", "expert", "stack", "language", "tool", "framework", "use", "proficien", "capab"],
    reply: [
      "Govind's key skills include:",
      "",
      "🔴 Backend",
      "   • Ruby  •  Ruby on Rails",
      "   • REST APIs  •  Sidekiq  •  Resque",
      "   • Background Jobs  •  Third-party APIs",
      "",
      "🗄️ Database",
      "   • PostgreSQL  •  MySQL",
      "   • Redis  •  RabbitMQ",
      "",
      "⚛️ Frontend",
      "   • React  •  Angular  •  Next.js",
      "   • JavaScript  •  jQuery  •  AJAX",
      "   • Tailwind CSS  •  HTML5  •  CSS3",
      "",
      "🚀 DevOps & Tools",
      "   • Docker  •  AWS  •  Nginx  •  Linux",
      "   • Git  •  GitHub  •  CI/CD",
      "   • Heroku  •  Capistrano  •  Jira",
    ].join("\n"),
  },
  {
    keys: ["experienc", "work", "job", "compan", "career", "profession", "employ", "position", "role", "current", "define"],
    reply: [
      "Govind has 2.6+ years of professional experience.",
      "",
      "💼 Associate Software Developer",
      "   Define Labs  |  2023 – Present",
      "",
      "   • Built scalable Ruby on Rails backend apps",
      "   • Designed and implemented RESTful APIs",
      "   • Worked with PostgreSQL and MySQL",
      "   • Built and maintained admin panel features",
      "   • Integrated payment gateways & third-party APIs",
      "   • Collaborated with frontend and QA teams",
      "   • Maintained and optimized production apps",
    ].join("\n"),
  },
  {
    keys: ["project", "built", "arenas", "heroic", "ballchalu", "sklash", "sportx", "blinkit", "chat", "tic", "vehicle", "wash", "nakama"],
    reply: [
      "Govind's projects:",
      "",
      "🏢 Professional Projects",
      "   • Arenas – Gaming backend (Rails, MQTT, Redis)",
      "   • Heroic – Sports betting platform",
      "   • BallChalu – Fantasy sports like Dream11",
      "   • Sklash Games – Multiplayer (Ludo, Chess)",
      "   • SportX – Cricket live scoring like Cricbuzz",
      "",
      "👨‍💻 Personal Projects",
      "   • Blinkit Trial – Grocery delivery app",
      "   • Multiplayer Tic-Tac-Toe – Real-time Nakama",
      "   • WhatsApp Chat App – JWT auth + React",
      "   • Vehicle Washing Center – Service booking",
    ].join("\n"),
  },
  {
    keys: ["educat", "stud", "colleg", "degre", "bca", "univers", "school", "qualif", "academ", "cgpa", "mark", "percent", "result"],
    reply: [
      "🎓 Education",
      "",
      "   • BCA – SRTM University, Nanded",
      "     2019 – 2022  |  CGPA: 9.51",
      "",
      "   • HSC – Maharashtra State Board",
      "     81%",
      "",
      "   • SSC – Maharashtra State Board",
      "     77.40%",
    ].join("\n"),
  },
  {
    keys: ["contact", "email", "reach", "hire", "linkedin", "github", "connect", "touch", "social", "phone", "mobile"],
    reply: [
      "📬 Contact Govind",
      "",
      "   • Email: govindbirajdar888@gmail.com",
      "   • LinkedIn: linkedin.com/in/govind-birajdar-26655123b",
      "   • GitHub: github.com/govindb123",
      "   • Location: Pune, Maharashtra, India",
    ].join("\n"),
  },
  {
    keys: ["ruby", "rails", "ror", "backend", "api", "rest", "sidekiq"],
    reply: [
      "Ruby on Rails is Govind's primary expertise! 🔴",
      "",
      "   2.6+ years building:",
      "",
      "   • Scalable REST APIs",
      "   • Admin panels and dashboards",
      "   • Background jobs with Sidekiq & Resque",
      "   • Payment gateway integrations",
      "   • Real-time features with MQTT & Redis",
      "   • PostgreSQL & MySQL database design",
    ].join("\n"),
  },
  {
    keys: ["react", "angular", "frontend", "javascript", "html", "css", "tailwind", "jquery"],
    reply: [
      "Govind works on frontend too! ⚛️",
      "",
      "   • React – Personal projects & this portfolio",
      "   • Angular – BallChalu (professional project)",
      "   • Next.js – Modern React framework",
      "   • JavaScript – Core language across all projects",
      "   • jQuery & AJAX",
      "   • Tailwind CSS",
      "   • HTML5 & CSS3",
    ].join("\n"),
  },
  {
    keys: ["databas", "postgre", "mysql", "redis", "rabbit", "queue", "cache", "sql"],
    reply: [
      "Govind's database expertise:",
      "",
      "   🗄️ PostgreSQL",
      "      Primary database across all projects",
      "",
      "   🗄️ MySQL",
      "      Used in professional products",
      "",
      "   ⚡ Redis",
      "      Caching, background jobs, real-time features",
      "",
      "   📨 RabbitMQ",
      "      Message queue integration",
    ].join("\n"),
  },
  {
    keys: ["about", "who", "introduc", "yourself", "govind", "tell me", "describe", "overview", "summary", "background"],
    reply: [
      "Hi! I'm Govind Birajdar 👋",
      "",
      "   Full Stack Developer with 2.6+ years of experience",
      "   specializing in Ruby on Rails backend development.",
      "",
      "   • Currently at Define Labs, Pune",
      "   • Expert in REST APIs & scalable web apps",
      "   • Works with React, Angular on frontend",
      "   • Loves building production-ready software",
      "",
      "   Ask me about skills, projects, or experience!",
    ].join("\n"),
  },
  {
    keys: ["hello", "hi", "hey", "morning", "evening", "night", "greet", "start", "help", "what can"],
    reply: [
      "Hello! 👋 Great to meet you!",
      "",
      "   I'm Govind's AI assistant. I can tell you about:",
      "",
      "   • 💼  Work experience",
      "   • 🛠️  Skills & technologies",
      "   • 🚀  Projects",
      "   • 🎓  Education",
      "   • 📬  Contact info",
      "",
      "   What would you like to know?",
    ].join("\n"),
  },
  {
    keys: ["locat", "pune", "india", "where", "city", "base", "live", "from"],
    reply: [
      "📍 Location",
      "",
      "   Govind is based in Pune, Maharashtra, India.",
      "",
      "   He is open to:",
      "   • Remote opportunities",
      "   • On-site roles in India",
    ].join("\n"),
  },
  {
    keys: ["resum", "cv", "download", "pdf"],
    reply: [
      "📄 Resume",
      "",
      "   You can download Govind's resume directly",
      "   from the portfolio!",
      "",
      "   • Click 'Resume' in the navbar",
      "   • Or 'Download Resume' in the Contact section",
    ].join("\n"),
  },
  {
    keys: ["achiev", "highlight", "award", "certif", "accomplish", "recognit"],
    reply: [
      "🏆 Achievements & Certifications",
      "",
      "   • CGPA 9.51 in BCA",
      "   • 2.6+ years professional experience",
      "   • 5+ production products delivered",
      "   • Full Stack Java – Naresh i Technologies (2022–2023)",
      "   • IBM Innovation Presentation Certification",
      "   • State Level C Programming Competition",
      "   • Certificate of Excellence (2019–2022)",
      "   • C Crack Certification",
    ].join("\n"),
  },
  {
    keys: ["docker", "aws", "devops", "deploy", "nginx", "linux", "server", "cloud", "heroku", "render", "cicd"],
    reply: [
      "🚀 DevOps & Deployment",
      "",
      "   • Docker – Containerization",
      "   • AWS – Cloud services",
      "   • Nginx – Web server configuration",
      "   • Linux – Server management",
      "   • Heroku – App deployment",
      "   • Render – Free tier hosting",
      "   • Capistrano – Automated deployments",
      "   • CI/CD pipelines",
      "   • Git & GitHub – Version control",
    ].join("\n"),
  },
];

function getBotReply(input) {
  const lower = input.toLowerCase().replace(/[^a-z0-9 ]/g, "");
  for (const r of responses) {
    if (r.keys.some((k) => lower.includes(k))) return r.reply;
  }
  return [
    "I'm not sure about that specifically.",
    "",
    "   I can help you with:",
    "",
    "   • 🛠️  Skills & tech stack",
    "   • 💼  Work experience & projects",
    "   • 🎓  Education & achievements",
    "   • 📬  Contact information",
    "",
    "   Try asking:",
    "   'What are his skills?'",
    "   'Tell me about his projects'",
    "   'Work experience'",
  ].join("\n");
}

// Play sound utility
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "open") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(600, ctx.currentTime + 0.12);
      osc.frequency.setValueAtTime(780, ctx.currentTime + 0.24);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === "send") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(700, ctx.currentTime);
      osc.frequency.setValueAtTime(900, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    }
  } catch {}
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-cyan-400 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function ChatMessage({ msg }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs ${isUser ? "bg-purple-500/20 border border-purple-500/40 text-purple-400" : "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400"}`}>
        {isUser ? <FaUser /> : <FaRobot />}
      </div>
      <div className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-7 whitespace-pre-line ${isUser
        ? "bg-purple-500/20 border border-purple-500/30 text-slate-200 rounded-tr-sm"
        : "bg-slate-800 border border-slate-700 text-slate-300 rounded-tl-sm"
      }`}>
        {msg.text}
      </div>
    </motion.div>
  );
}

const SUGGESTIONS = ["What are his skills?", "Tell me about projects", "Work experience", "Contact info"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! 👋\n\nI'm Govind's AI assistant.\n\nHow can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Warm up AudioContext on first user interaction
  useEffect(() => {
    const unlock = () => {
      getAudioCtx();
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("mousemove", unlock);
      window.removeEventListener("scroll", unlock);
    };
    window.addEventListener("click", unlock);
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock);
    window.addEventListener("mousemove", unlock);
    window.addEventListener("scroll", unlock);
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("mousemove", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, []);

  // Auto-open after 4 seconds — silent (browser blocks autoplay audio)
  // Sound plays when user manually opens/closes
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    playSound("send");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setMessages((prev) => [...prev, { role: "ai", text: getBotReply(msg) }]);
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      <motion.button
        onClick={() => {
          setOpen((v) => {
            if (!v) playSound("open");
            return !v;
          });
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white text-xl"
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(6,182,212,0.5)" }}
        whileTap={{ scale: 0.95 }}
        animate={open ? {} : { y: [0, -6, 0] }}
        transition={open ? {} : { duration: 2, repeat: Infinity }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><FaTimes /></motion.span>
            : <motion.span key="r" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><FaRobot /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0f1e] border-b border-slate-700 px-4 py-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-cyan-500/20 border border-cyan-500/40 rounded-xl flex items-center justify-center text-cyan-400">
                  <FaRobot />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Govind's AI Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="bg-[#0a0f1e] overflow-y-auto p-4 space-y-4" style={{ height: "320px" }}>
              {messages.map((msg, i) => <ChatMessage key={i} msg={msg} />)}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs">
                    <FaRobot />
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm">
                    <TypingDots />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="bg-[#0a0f1e] px-4 pb-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => sendMessage(s)}
                    className="text-xs bg-slate-800 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full transition-all">
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="bg-[#0d1224] border-t border-slate-700 px-3 py-3 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Govind..."
                className="flex-1 bg-slate-800 border border-slate-600 focus:border-cyan-500/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all"
              />
              <motion.button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 disabled:opacity-40 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="text-xs" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
