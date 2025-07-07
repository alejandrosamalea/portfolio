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

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen pb-12 w-full">
       

        <Routes>
          {/* Página principal con todos los componentes */}
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

          {/* Página del proyecto Waumatch */}
          <Route path="/projects/waumatch" element={<WauMatch />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;