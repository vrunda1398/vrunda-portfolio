import {
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
  FaAws
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql
} from "react-icons/si";

import { motion } from "framer-motion";

function Work() {
  return (
    <section
      id="work"
      className="bg-[#0b0f1a] text-white px-16 py-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16">
          Experience
        </h2>

        {/* 🔥 Skills Grid (Original Brand Colors) */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-12 mb-24 text-center">

          <div className="flex flex-col items-center space-y-3">
            <FaPython size={55} color="#3776AB" />
            <p className="text-gray-400 text-sm">Python</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <FaJava size={55} color="#ED8B00" />
            <p className="text-gray-400 text-sm">Java</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <SiSpringboot size={55} color="#6DB33F" />
            <p className="text-gray-400 text-sm">Spring Boot</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <SiMysql size={55} color="#00758F" />
            <p className="text-gray-400 text-sm">MySQL</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <FaDocker size={55} color="#2496ED" />
            <p className="text-gray-400 text-sm">Docker</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <FaAws size={55} color="#FF9900" />
            <p className="text-gray-400 text-sm">AWS</p>
          </div>

        </div>

        {/* 🔥 Experience Cards */}

        <div className="space-y-20">

          {/* Infosys */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-black border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold">
              Senior Systems Engineer
            </h3>

            <p className="text-purple-400 mt-2">
              Infosys Limited • April 2021 – May 2024
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Led backend development for enterprise applications serving
              5,000+ users. Designed scalable REST APIs using Java and Spring Boot,
              increased automated test coverage from 60% to 85%, and automated
              batch processes reducing manual effort by 30%.
            </p>
          </motion.div>

          {/* Research Assistant */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-black border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold">
              Research Assistant
            </h3>

            <p className="text-purple-400 mt-2">
              University of Michigan – Dearborn • 2024 – Present
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Developed a benchmarking suite to evaluate performance-critical
              and LLM-generated optimizations using structured runtime analysis
              and automated evaluation pipelines.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Work;