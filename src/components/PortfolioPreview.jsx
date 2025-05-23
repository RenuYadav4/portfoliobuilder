import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Layout/Navbar";

const PortfolioPreview = () => {
  const { state: data } = useLocation();

  return (
    <div className="font-sans w-full bg-gradient-to-br  from-gray-900 via-gray-800 to-black text-gray-100 overflow-x-hidden">
      <Navbar/>
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-2 lg:ml-30 text-center md:text-left"
        >
          <h1 className="text-6xl  md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500">
            {data?.name || "Your Name"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {data?.title || "Web Developer"}
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            {data?.summary || "This is your personal introduction. Let the world know who you are and what you do."}
          </p>
          <div className="text-lg text-gray-300">
            {data?.email && <p><FaEnvelope className="inline mr-2 text-blue-600" /> {data.email}</p>}
            {data?.phone && <p><FaPhone className="inline mr-2 text-green-600" /> {data.phone}</p>}
          </div>
          <div className="flex gap-6 text-3xl mt-4 justify-center md:justify-start">
            {data?.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>}
            {data?.github && <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-black"><FaGithub /></a>}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?ga=GA1.1.140562508.1741446864&semt=ais_hybrid&w=740" alt="Profile"
            className="rounded-full shadow-2xl w-96 h-96 object-cover border-4 border-white" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">🛠 Skills</h2>
      <div className="p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.skills?.map((skill, i) => (
          <motion.div
            key={i}
            className="p-6 text-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-purple-600/40 transition transform hover:scale-105 cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaTools className="text-3xl mb-2 mx-auto text-purple-300" />
            <p className="text-lg font-semibold text-purple-300">{skill}</p>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <h2 className="text-4xl font-bold text-center text-green-400 mb-12">🚀 Projects</h2>
      <div className="p-5 grid md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.projects?.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-green-400/30 hover:shadow-green-400/50 hover:border-green-500 transition transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold text-green-300 mb-2 flex items-center">
              <FaProjectDiagram className="inline mr-2" /> {proj.name}
            </h3>
            <p className="text-green-200 text-sm mb-2">{proj.description}</p>
            {proj.link && (
              <a
                href={proj.link}
                className="text-green-400 hover:text-green-600 hover:underline text-sm"
                target="_blank"
                rel="noreferrer"
              >
                🔗 View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">💼 Experience</h2>
      <div className="p-5 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.experience?.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-blue-400/30 hover:shadow-blue-400/50 hover:border-blue-500 transition transform hover:scale-105 cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-bold text-blue-300 flex items-center mb-2">
              <FaBriefcase className="inline mr-2" />
              {exp.role}
            </h3>
            <p className="text-blue-200">{exp.company}</p>
            <p className="text-sm text-blue-300">{exp.duration}</p>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">🎓 Education</h2>
      <div className="p-5 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.education?.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md border border-indigo-400/30 hover:shadow-indigo-400/50 hover:border-indigo-500 transition transform hover:scale-105 cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-bold text-indigo-300 flex items-center mb-2">
              <FaGraduationCap className="inline mr-2" />
              {edu.degree}
            </h3>
            <p className="text-indigo-200">{edu.institution}</p>
            <p className="text-sm text-indigo-300">{edu.year}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <section className="w-full px-10 py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">📬 Contact Me</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md transition">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default PortfolioPreview;