import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <main className="p-4">
        <About />
        <ImageCarousel/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
