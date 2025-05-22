import React from "react";
import { FiFileText, FiDownload, FiLink } from "react-icons/fi";

const features = [
  {
    title: "Professional Resume Templates",
    description: "Choose from modern, eye-catching templates to create your resume with ease.",
    icon: <FiFileText className="text-4xl text-white" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Export to PDF",
    description: "Download your resume or portfolio in high-quality PDF format with one click.",
    icon: <FiDownload className="text-4xl text-white" />,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Portfolio Builder",
    description: "Create and share a beautiful, personalized portfolio to showcase your work.",
    icon: <FiLink className="text-4xl text-white" />,
    color: "from-pink-500 to-yellow-500",
  },
];

const Features = () => {
  return (
    <section className="relative z-10 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md mb-6">
          Why Choose Us?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-12">
          Our tools help you create professional resumes and stunning portfolios in just a few clicks.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition duration-300 group`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transform transition duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
