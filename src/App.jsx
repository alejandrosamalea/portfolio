import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <main className="p-4">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
