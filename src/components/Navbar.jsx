// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="sticky top-0 bg-white shadow-sm z-50">
//       <div className="flex justify-center space-x-24 py-4 text-xl font-medium">

//         <NavLink to="/" end>
//           {({ isActive }) => (
//             <div className="relative pb-2">
//               <span
//                 className={
//                   isActive
//                     ? "text-black transition duration-300"
//                     : "text-gray-500 hover:text-black transition duration-300"
//                 }
//               >
//                 Home
//               </span>
//               {isActive && (
//                 <div className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"></div>
//               )}
//             </div>
//           )}
//         </NavLink>

//         <NavLink to="/about">
//           {({ isActive }) => (
//             <div className="relative pb-2">
//               <span
//                 className={
//                   isActive
//                     ? "text-black transition duration-300"
//                     : "text-gray-500 hover:text-black transition duration-300"
//                 }
//               >
//                 About
//               </span>
//               {isActive && (
//                 <div className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"></div>
//               )}
//             </div>
//           )}
//         </NavLink>

//         <NavLink to="/portfolio">
//           {({ isActive }) => (
//             <div className="relative pb-2">
//               <span
//                 className={
//                   isActive
//                     ? "text-black transition duration-300"
//                     : "text-gray-500 hover:text-black transition duration-300"
//                 }
//               >
//                 Portfolio
//               </span>
//               {isActive && (
//                 <div className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"></div>
//               )}
//             </div>
//           )}
//         </NavLink>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        {/* Logo */}
        <div className="text-white font-semibold text-lg tracking-wide">
          VK Portfolio
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-sm uppercase tracking-widest text-gray-400">

          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#work" className="hover:text-white transition">Experience</a>
          <a href="#portfolio" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {open ? (
            <FiX onClick={() => setOpen(false)} />
          ) : (
            <FiMenu onClick={() => setOpen(true)} />
          )}
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-6 text-gray-300 uppercase tracking-wide text-sm">

          <a href="#hero" onClick={() => setOpen(false)} className="block hover:text-white transition">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-white transition">About</a>
          <a href="#work" onClick={() => setOpen(false)} className="block hover:text-white transition">Experience</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="block hover:text-white transition">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-white transition">Contact</a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;