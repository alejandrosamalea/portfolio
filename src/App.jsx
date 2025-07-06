import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Carousel from "./components/Carousel";
import Technologies from "./components/Technologies";

function App() {
  return (
 <div className="bg-black text-white min-h-screen pb-12 w-full">
    
  <Navbar />

 
  <About />
  <Carousel />
  <Experience />
  <Technologies />
  <Contact />
  <Footer/>
    </div>
  );
}

export default App;