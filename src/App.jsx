import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Carousel from "./components/Carousel";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="p-4 pt-20"> {/* pt-20 (80px) compensa la altura típica de un Navbar */}
        <About />
        <Carousel />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;