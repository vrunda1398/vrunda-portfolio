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

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        {/* Logo / Name */}
        <div className="text-white font-semibold text-lg tracking-wide">
          VK Portfolio
        </div>

        {/* Links */}
        <div className="flex space-x-10 text-sm uppercase tracking-widest text-gray-400">

          <a href="#hero" className="hover:text-white transition relative group">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
          </a>

          <a href="#about" className="hover:text-white transition relative group">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
          </a>

          <a href="#work" className="hover:text-white transition relative group">
            Experience
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
          </a>

          <a href="#portfolio" className="hover:text-white transition relative group">
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
          </a>

          <a href="#contact" className="hover:text-white transition relative group">
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;