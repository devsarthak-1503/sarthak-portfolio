import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Github from "./sections/Github";
import AISarthak from "./sections/AISarthak";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Github />
      <AISarthak />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;