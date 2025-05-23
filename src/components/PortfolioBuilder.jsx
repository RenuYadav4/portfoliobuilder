import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

const Input = ({ ...props }) => (
  <input className="w-full border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" {...props} />
);

const PortfolioBuilder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    summary: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: [{ institution: "", degree: "", year: "" }],
    skills: [""],
    projects: [{ name: "", description: "", link: "" }],
    experience: [{ company: "", role: "", duration: "" }],
  });

  const handleChange = (e, field, index, subfield) => {
    if (["skills", "projects", "experience", "education"].includes(field)) {
      const updated = [...formData[field]];
      if (subfield) {
        updated[index][subfield] = e.target.value;
      } else {
        updated[index] = e.target.value;
      }
      setFormData({ ...formData, [field]: updated });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const addField = (field) => {
    const blank =
      field === "skills"
        ? [""]
        : field === "projects"
          ? [{ name: "", description: "", link: "" }]
          : field === "experience"
            ? [{ company: "", role: "", duration: "" }]
            : [{ institution: "", degree: "", year: "" }];
    setFormData({ ...formData, [field]: [...formData[field], ...blank] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/preview", { state: formData });
  };

  // const Input = ({ ...props }) => (
  //   <input className="w-full border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" {...props} />
  // );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
        ✨ Build Your Portfolio
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-8 bg-white shadow-2xl p-8 rounded-2xl"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-700">
            <FaUser /> Personal Info
          </h2>
          <Input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => handleChange(e, "name")} required />
          <Input type="text" placeholder="Title (e.g. Frontend Developer)" value={formData.title} onChange={(e) => handleChange(e, "title")} required />
          <textarea
            className="w-full border p-3 rounded-lg mt-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Short Summary"
            value={formData.summary}
            onChange={(e) => handleChange(e, "summary")}
            required
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-green-700">
            <FaEnvelope /> Contact Info
          </h2>
          <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => handleChange(e, "email")} required />
          <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleChange(e, "phone")} />
          <Input type="url" placeholder="LinkedIn URL" value={formData.linkedin} onChange={(e) => handleChange(e, "linkedin")} />
          <Input type="url" placeholder="GitHub URL" value={formData.github} onChange={(e) => handleChange(e, "github")} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-indigo-700">
            <FaGraduationCap /> Education
          </h2>
          {formData.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <Input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => handleChange(e, "education", i, "institution")} />
              <Input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, "education", i, "degree")} />
              <Input type="year" placeholder="Year" value={edu.year} onChange={(e) => handleChange(e, "education", i, "year")} />
            </div>
          ))}
          <button type="button" onClick={() => addField("education")} className="text-indigo-600 font-medium">+ Add Education</button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-purple-700">
            <FaTools /> Skills
          </h2>
          {formData.skills.map((skill, i) => (
            <Input
            type="text"
              key={i}
              placeholder={`Skill #${i + 1}`}
              value={skill}
              onChange={(e) => handleChange(e, "skills", i)}
            />
          ))}
          <button type="button" onClick={() => addField("skills")} className="text-purple-600 font-medium mt-2">+ Add Skill</button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-teal-700">
            <FaProjectDiagram /> Projects
          </h2>
          {formData.projects.map((project, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <Input type="text" placeholder="Project Name" value={project.name} onChange={(e) => handleChange(e, "projects", i, "name")} />
              <Input type="text" placeholder="Description" value={project.description} onChange={(e) => handleChange(e, "projects", i, "description")} />
              <Input  type="url"placeholder="Project Link" value={project.link} onChange={(e) => handleChange(e, "projects", i, "link")} />
            </div>
          ))}
          <button type="button" onClick={() => addField("projects")} className="text-teal-600 font-medium">+ Add Project</button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-pink-700">
            <FaBriefcase /> Experience
          </h2>
          {formData.experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
              <Input type="text" placeholder="Company" value={exp.company} onChange={(e) => handleChange(e, "experience", i, "company")} />
              <Input type="text" placeholder="Role" value={exp.role} onChange={(e) => handleChange(e, "experience", i, "role")} />
              <Input  placeholder="Duration" value={exp.duration} onChange={(e) => handleChange(e, "experience", i, "duration")} />
            </div>
          ))}
          <button type="button" onClick={() => addField("experience")} className="text-pink-600 font-medium">+ Add Experience</button>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-lg text-xl font-bold shadow hover:from-green-500 hover:to-green-700 transition"
        >
          🚀 Preview Portfolio
        </button>
      </form>
    </div>
  );
};

export default PortfolioBuilder;