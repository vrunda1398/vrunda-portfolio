import { motion } from "framer-motion";
import profile from "/src/assets/vrunda.jpg";


function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-black text-white relative overflow-hidden px-6 md:px-16 pt-24 md:pt-0">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700 rounded-full blur-3xl opacity-30"></div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">

        {/* LEFT SIDE */}
        <div>

          {/* Intro */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-600"
          >
            Hi there, I am
          </motion.h2>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mt-4"
          >
            VRUNDA KADAM
          </motion.h1>

          {/* Floating Card BELOW NAME (still left column) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12"
          >
            <div className="bg-white text-black px-8 py-6 rounded-2xl shadow-2xl max-w-lg">

              <p className="text-lg leading-relaxed mb-3">
                I'm a Software Engineer with a master's degree in Computer ans Information Science
                and 3+ years of experience in software development.
              </p>

              <div className="text-sm uppercase tracking-widest text-gray-500">
                Software Engineer | AI | ML
              </div>

            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="flex justify-center">
        <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            src={profile}
            alt="Vrunda Kadam"
            className="w-72 h-72 object-cover rounded-full border-4 border-white"
          />
            </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;