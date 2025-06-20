import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ImageCarousel from "./components/ImageCarousel";
import Carousel from "./components/Carousel";


function App() {
  return (
      <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="p-4">
        <About />
        <Carousel/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
