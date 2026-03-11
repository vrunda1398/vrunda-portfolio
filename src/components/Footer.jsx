import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-black text-white py-5 px-10 overflow-hidden"
    >
      {/* Subtle purple glow background */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-700 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-6xl font-bold mb-6">
            Contact
          </h2>

          <p className="text-2xl text-gray-400">
            Reach out to me on
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10 text-xl">

          <motion.div
            whileHover={{ x: 8 }}
            className="flex items-center space-x-6 group"
          >
            <FaEnvelope className="text-3xl text-gray-400 group-hover:text-white transition" />
            <a
              href="mailto:vrunda1398@gmail.com"
              className="text-gray-400 group-hover:text-white transition"
            >
              vrunda1398@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ x: 8 }}
            className="flex items-center space-x-6 group"
          >
            <FaLinkedin className="text-3xl text-gray-400 group-hover:text-white transition" />
            <a
              href="https://www.linkedin.com/in/vrunda-kadam-28806693/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 group-hover:text-white transition"
            >
              linkedin.com/in/vrunda-kadam-28806693/
            </a>
          </motion.div>

          <motion.div
            whileHover={{ x: 8 }}
            className="flex items-center space-x-6 group"
          >
            <FaGithub className="text-3xl text-gray-400 group-hover:text-white transition" />
            <a
              href="https://github.com/vrunda1398"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 group-hover:text-white transition"
            >
              github.com/vrunda1398
            </a>
          </motion.div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;