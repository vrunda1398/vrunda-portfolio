// import React from "react";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   })
// };

// function About() {
//   return (
//     <section className="relative py-40 px-12 bg-white overflow-hidden">

//       {/* Floating Gradient Orb */}
//       <motion.div
//         animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 12 }}
//         className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 rounded-full blur-3xl opacity-40"
//       ></motion.div>

//       <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-16">

//         {/* LEFT SIDE LABEL */}
//         <div className="md:col-span-3">
//           <div className="sticky top-40">

//             <div className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-14">
//               About
//             </div>

//             {/* Vertical Accent Line */}
//             <div className="w-1 h-32 bg-gradient-to-b from-blue-500 via-purple-500 to-green-400 rounded-full"></div>

//           </div>
//         </div>

//         {/* RIGHT SIDE CONTENT */}
//         <div className="md:col-span-9 space-y-12">

//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={0}
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-bold leading-tight"
//           >
            
//             <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 bg-clip-text text-transparent">
//               Skills and Technologies
//             </span>
//           </motion.h2>

//           {/* Animated Divider */}
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100%" }}
//             transition={{ duration: 1 }}
//             className="h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"
//           ></motion.div>

//           <p className="text-xl font-semibold text-black">
//               Currently seeking full-time and internship opportunities in software engineering, backend development, or applied machine learning roles.
//             </p>

//           {/* Paragraphs */}
//           {[
//             `I am a Master's student in Computer & Information Science with a strong foundation in backend engineering and scalable system design. My primary focus lies in building reliable REST APIs, optimizing performance, and developing clean, maintainable architectures.`,

//             `I have hands-on experience working with Java, Spring Boot, SQL, and modern web technologies, along with exposure to machine learning and AI-driven applications. I enjoy solving complex technical problems and translating ideas into efficient, production-ready solutions.`,

//             `Beyond web systems, I have worked on AI-driven workflows and optimization projects that required strong problem-solving and analytical thinking. I am particularly interested in distributed systems, system efficiency, and building robust production-grade software.`,

//             `I thrive in collaborative environments, enjoy continuous learning, and am motivated by solving real-world challenges through technology.`
//           ].map((text, index) => (
//             <motion.p
//               key={index}
//               custom={index + 1}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeUp}
//               className="text-lg md:text-xl text-gray-700 leading-relaxed"
//             >
//               {text}
//             </motion.p>
//           ))}

//           {/* Focus Areas Grid */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={5}
//             variants={fadeUp}
//             className="pt-16 grid md:grid-cols-3 gap-8"
//           >
//             {[
//               "Scalable REST APIs",
//               "System Design",
//               "Performance Optimization",
//               "Distributed Systems",
//               "AI-driven Workflows",
//               "Production-grade Software"
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="px-6 py-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
//               >
//                 {item}
//               </div>
//             ))}
//           </motion.div>

//           {/* Skill Chips */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={6}
//             variants={fadeUp}
//             className="pt-12 flex flex-wrap gap-4"
//           >
//             {[
//               "Java",
//               "Spring Boot",
//               "SQL",
//               "REST APIs",
//               "System Architecture",
//               "Machine Learning",
//               "Backend Engineering"
//             ].map((skill, i) => (
//               <span
//                 key={i}
//                 className="px-5 py-2 rounded-full border border-gray-300 text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:text-white transition duration-300 cursor-default"
//               >
//                 {skill}
//               </span>
//             ))}
//           </motion.div>

//           {/* Closing Statement */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={7}
//             variants={fadeUp}
//             className="pt-12 border-t border-gray-200"
//           >
            
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default About;

import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-black via-[#0b0f1a] to-black text-white px-16 py-32 overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* RIGHT SIDE — TECH IMAGE */}
      <div className="flex justify-center">
        <img
          src="/src/assets/ai-illustration.png"
          alt="AI Illustration"
          className="w-[450px] opacity-80"
        />
      </div>

        {/* RIGHT SIDE — CONTENT */}
        <div>

          <h2 className="text-5xl font-bold mb-16 tracking-wide">
            ABOUT
          </h2>

          {/* Academics Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-start space-x-6">

              <FaGraduationCap className="text-9xl text-purple-400 mt-2" />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Academics
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  I am a Master's student in Computer & Information Science from the University of Michigan-Dearborn.
                  I bring a strong foundation in software engineering, system design and modern development practices.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Experience Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-start space-x-6">

              <FaLaptopCode className="text-9xl text-purple-400 mt-2" />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Experience
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  I have 3 years of experience in software development, working on innovative projects and enhancing my technical skills at Infosys Ltd.. 
                  I’m passionate about leveraging cutting-edge technologies.
                  I enjoy solving complex technical problems and translating ideas into efficient,
                  production-ready solutions.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Resume Button */}
          <div className="mt-16">
            <a
              href="/src/assets/Vrunda_VK_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-500 transition rounded-full text-lg font-semibold shadow-lg"
            >
              Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;