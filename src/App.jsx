import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import Chatbot from "./components/Chatbot";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      // Clear state so refresh doesn't re-trigger scroll
      navigate("/", { replace: true, state: {} });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
