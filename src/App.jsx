import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Carousel from "./components/Carousel";
import Technologies from "./components/Technologies";

function App() {
  return (
 <div className="bg-black text-white min-h-screen pb-12"> {/* pb-12 = padding-bottom 3rem */}
      <Navbar />
 
  <About />
  <Carousel />
  <Experience />
  <Technologies />
  <Contact />

    </div>
  );
}

export default App;