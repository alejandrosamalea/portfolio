import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Main/Navbar";
import About from "./components/Main/About";
import Footer from "./components/Main/Footer";
import Contact from "./components/Main/Contact";
import Experience from "./components/Main/Experience";
import Carousel from "./components/Main/Carousel";
import Technologies from "./components/Main/Technologies";

import WauMatch from "./components/WauMatch/WauMatch";
import TFGPoke from "./components/TFGPoke/TFGPoke"; // ✅ Import correcto

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen pb-12 w-full">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <About />
                <Carousel />
                <Experience />
                <Technologies />
                <Contact />
              </>
            }
          />
          <Route path="/projects/waumatch" element={<WauMatch />} />
          <Route path="/projects/tfgpoke" element={<TFGPoke />} /> {/* ✅ Nueva ruta */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
