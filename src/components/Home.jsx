import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "/src/assets/vrunda.jpg";

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 bg-gray-100">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400 shadow-xl">
            <img
              src={profile}
              alt="Vrunda Kadam"
              className="w-72 h-72 object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              Vrunda Kadam
            </span>{" "}
            👋
          </h1>

          <h2 className="text-3xl font-semibold mb-6">
            Software Engineer
          </h2>

          <div className="space-y-3 text-gray-700 text-lg">
            <p>🎓 MS in Computer & Information Science</p>
            <p>📍 Michigan, USA</p>
            <p>💻 Backend & Full-Stack Developer</p>
            <p>📧 vrunda1398@gmail.com</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex space-x-8 mt-8 text-4xl">
            <a
              href="https://github.com/vrunda1398"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vrunda-kadam-28806693/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
