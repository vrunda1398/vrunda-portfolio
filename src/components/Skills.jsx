import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white px-16 py-32"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-20">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Programming */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#0b0f1a] border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Programming
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Python, Java, C/C++, SQL, PL/SQL, Shell Scripting
            </p>
          </motion.div>

          {/* Backend Development */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#0b0f1a] border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Backend Development
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Spring Boot, REST APIs, Microservices, SOAP Services,
              JUnit, Mockito, MockMVC
            </p>
          </motion.div>

          {/* Machine Learning */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#0b0f1a] border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Machine Learning & AI
            </h3>

            <p className="text-gray-400 leading-relaxed">
              ML Algorithms, LSTM, GRU, CNN, LLMs, NLP,
              TensorFlow, PyTorch, Scikit-Learn
            </p>
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#0b0f1a] border border-white/10 p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Tools & DevOps
            </h3>

            <p className="text-gray-400 leading-relaxed">
              GitHub, Docker, Jenkins CI/CD, Jira,
              SonarQube, Agile, Scrum, Kanban
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Skills;