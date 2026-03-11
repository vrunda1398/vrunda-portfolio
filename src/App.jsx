// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Portfolio from "./components/portfolio";

// function App() {
//   const location = useLocation();

//   return (
//     <div className="font-sans min-h-screen bg-gradient-to-b from-gray-100 to-white">
//       <Navbar />

//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//         </Routes>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;

import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div className="bg-[#f8f8f8] text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;