import { motion } from "framer-motion";


import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaJava,
  FaAws
} from "react-icons/fa";

import {
  SiMongodb,
  SiGraphql,
  SiMysql,
  SiHtml5,
  SiCss3
} from "react-icons/si";

function Work() {
  return (
    <section
      id="work"
      className="relative bg-black text-white px-16 py-20 overflow-hidden"
    >
      {/* Skills Section */}
      <div className="mt-16 mb-24">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 justify-items-center">

          {/* Python */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <FaPython size={60} color="#3776AB" />
            <span className="mt-4 text-gray-300 text-sm">Python</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <FaReact size={60} color="#61DAFB" />
            <span className="mt-4 text-gray-300 text-sm">React</span>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <SiMongodb size={60} color="#47A248" />
            <span className="mt-4 text-gray-300 text-sm">MongoDB</span>
          </div>


          {/* AWS */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <FaAws size={60} color="#FF9900" />
            <span className="mt-4 text-gray-300 text-sm">AWS</span>
          </div>

          {/* Docker */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <FaDocker size={60} color="#2496ED" />
            <span className="mt-4 text-gray-300 text-sm">Docker</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <FaGithub size={60} color="#ffffff" />
            <span className="mt-4 text-gray-300 text-sm">GitHub</span>
          </div>

          {/* Java */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <FaJava size={60} color="#f89820" />
            <span className="mt-4 text-gray-300 text-sm">Java</span>
          </div>

          {/* MySQL */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <SiMysql size={60} color="#4479A1" />
            <span className="mt-4 text-gray-300 text-sm">MySQL</span>
          </div>

          {/* HTML */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <SiHtml5 size={60} color="#E34F26" />
            <span className="mt-4 text-gray-300 text-sm">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center transition transform hover:scale-110 duration-300">
            <SiCss3 size={60} color="#1572B6" />
            <span className="mt-4 text-gray-300 text-sm">CSS</span>
          </div>

        </div>

      </div>
      {/* subtle glow */}
      <div className="absolute -left-40 top-40 w-[400px] h-[400px] bg-purple-700 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-20">
          Work Experience
        </h2>

        <div className="space-y-20">

          {/* Infosys */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-purple-600 pl-8"
          >
            <h3 className="text-2xl font-semibold">
              Senior Systems Engineer
            </h3>

            <p className="text-purple-400 mt-2">
              Infosys Limited
              <br />
              April 2021 – May 2024
            </p>

            <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed list-disc list-inside">
              <li>
                Designed and implemented scalable RESTful APIs using Java and Spring Boot,
                supporting enterprise web applications serving 5,000+ users.
              </li>
              <li>
                Documented and validated APIs using Swagger and Postman,
                ensuring reliable integration and smooth frontend communication.
              </li>
              <li>
                Increased unit test coverage from 60% to 95% using JUnit and Mockito,
                improving code quality and reducing post-deployment defects.
              </li>
              <li>
                Automated and monitored batch jobs using UC4 and scripting,
                reducing manual intervention by 30%.
              </li>
              <li>
                Developed SOAP-based services for third-party system integrations and
                collaborated with Agile teams to deliver production-ready features.
              </li>
            </ul>
          </motion.div>

          {/* Research Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border-l-2 border-purple-600 pl-8"
          >
            <h3 className="text-2xl font-semibold">
              Research Assistant
            </h3>

            <p className="text-purple-400 mt-2">
              University of Michigan – Dearborn
              <br />
              May 2025 - Nov 2025
            </p>

            <ul className="mt-6 space-y-3 text-gray-400 leading-relaxed list-disc list-inside">
              <li>
                Developed a benchmark suite using real-world GitHub commits to evaluate
                performance-critical and LLM-generated optimizations.
              </li>
              <li>
                Extracted original and optimized code versions, implemented execution
                harnesses, and measured runtime behavior for performance validation.
              </li>
              <li>
                Automated correctness and performance evaluation through structured
                benchmarking scripts.
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Work;