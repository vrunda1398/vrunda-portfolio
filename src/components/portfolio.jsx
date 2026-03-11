import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#0b0f1a] text-white px-16 py-32"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-20">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Project 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-black border border-white/10 p-10 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Heart Disease Prediction
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Developed a machine learning pipeline to predict the likelihood of heart
              disease using structured clinical datasets. Implemented data preprocessing,
              feature engineering, and model training workflows to evaluate multiple
              classification algorithms and compare predictive performance.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Scikit-Learn
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Data Preprocessing
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Classification
              </span>
            </div>

            <a
              href="https://github.com/vrunda1398/AI"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-black border border-white/10 p-10 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Flight Delay Prediction
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Built a machine learning pipeline to predict U.S. domestic flight delays using large-scale aviation datasets. 
              Performed data cleaning, feature engineering, and exploratory 
              analysis to identify key airline and airport performance patterns influencing delay outcomes.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Big Data
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Data Analysis
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Data Analysis
              </span>
            </div>

            <a
              href="https://github.com/vrunda1398/Big-Data"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-black border border-white/10 p-10 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Speech Recognition App
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Built a continuous speech-to-text Android application using the native
              SpeechRecognizer API for real-time voice transcription. Implemented
              audio recording, playback, and live text conversion with a responsive UI.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Java
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Andriod
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Mobile Development
              </span>
            </div>

            <a
              href="https://github.com/vrunda1398/Project-2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-black border border-white/10 p-10 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Stock Market Value Prediction
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Developed a time-series forecasting model to predict stock price movements
              using historical financial data. Implemented data preprocessing,
              feature engineering, and model training workflows to analyze market trends
              and evaluate predictive accuracy.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Data Visualisation
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Time-Series
              </span>
            </div>

            <a
              href="https://github.com/vrunda1398/PatternRecogProject"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-black border border-white/10 p-10 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Clickbait Spoiling
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Developed a transformer-based NLP pipeline to classify and generate
              spoilers for clickbait headlines. Leveraged pre-trained language models
              to perform spoiler type classification and abstractive text generation.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                RoBERTa | FLAN-T5
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                NLP
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Transformers
              </span>
            </div>

            <a
              href="https://github.com/vrunda1398/semeval_clickbait_spoiler"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </motion.div>

          {/* Project 6 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-black border border-white/10 p-10 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              React Portfolio Website
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Designed and developed a modern, fully responsive portfolio website
              using React and Tailwind CSS to showcase professional experience,
              technical projects, and skills. Implemented dynamic components,
              smooth scrolling navigation, and animated UI transitions.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                React
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-4 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Vite
              </span>
            </div>

            <a
              href="https://github.com/vrunda1398/vrunda-portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition"
            >
              <FaGithub className="mr-2" />
              View Code
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;