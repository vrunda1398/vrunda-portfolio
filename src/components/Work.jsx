import { motion } from "framer-motion";

function Work() {
  return (
    <section
      id="work"
      className="relative bg-black text-white px-16 py-32 overflow-hidden"
    >
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
              Infosys Limited | April 2021 – May 2024
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
              University of Michigan – Dearborn | May 2025 - Nov 2025
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