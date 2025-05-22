import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    headline: "",
    summary: "",
    education: [{ school: "", degree: "", year: "" }],
    experience: [{ company: "", role: "", duration: "" }],
    projects: [{ title: "", description: "", link: "" }],
    skills: [],
    skillInput: "",
  });

  const handleChange = (e, index, section) => {
    const { name, value } = e.target;
    if (section) {
      const updated = [...formData[section]];
      updated[index][name] = value;
      setFormData({ ...formData, [section]: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addField = (section) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], { ...formData[section][0] }],
    });
  };

  const handleSkillAdd = (e) => {
    e.preventDefault();
    if (formData.skillInput.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.skillInput.trim()],
        skillInput: "",
      });
    }
  };

  const handleSubmit = () => {
    const { name, email, phone, headline, summary, education, experience, projects, skills } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !headline.trim() ||
      !summary.trim()
    ) {
      alert("Please fill out all basic details.");
      return;
    }

    for (let edu of education) {
      if (!edu.school.trim() || !edu.degree.trim() || !edu.year.trim()) {
        alert("Please complete all education fields.");
        return;
      }
    }

    for (let exp of experience) {
      if (!exp.company.trim() || !exp.role.trim() || !exp.duration.trim()) {
        alert("Please complete all experience fields.");
        return;
      }
    }

    for (let proj of projects) {
      if (!proj.title.trim() || !proj.description.trim() || !proj.link.trim()) {
        alert("Please complete all project fields.");
        return;
      }
    }

    if (skills.length === 0) {
      alert("Please add at least one skill.");
      return;
    }

    navigate("/template", { state: formData });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-xl">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">📝 Create Your Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="👤 Full Name" name="name" value={formData.name} onChange={handleChange} required />
        <Input label="📧 Email" name="email" value={formData.email} onChange={handleChange} required />
        <Input label="📞 Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
        <Input label="💼 Headline" name="headline" value={formData.headline} onChange={handleChange} required />
      </div>

      <Textarea label="🧾 Professional Summary" name="summary" value={formData.summary} onChange={handleChange} required />

      <SectionTitle title="🎓 Education" />
      {formData.education.map((edu, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input label="🏫 School" name="school" value={edu.school} onChange={(e) => handleChange(e, i, "education")} required />
          <Input label="📘 Degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, i, "education")} required />
          <Input label="📅 Year" name="year" value={edu.year} onChange={(e) => handleChange(e, i, "education")} required />
        </div>
      ))}
      <AddButton label="Add Education" onClick={() => addField("education")} />

      <SectionTitle title="💼 Work Experience" />
      {formData.experience.map((exp, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input label="🏢 Company" name="company" value={exp.company} onChange={(e) => handleChange(e, i, "experience")} required />
          <Input label="🧑‍💼 Role" name="role" value={exp.role} onChange={(e) => handleChange(e, i, "experience")} required />
          <Input label="🕒 Duration" name="duration" value={exp.duration} onChange={(e) => handleChange(e, i, "experience")} required />
        </div>
      ))}
      <AddButton label="Add Experience" onClick={() => addField("experience")} />

      <SectionTitle title="🚀 Projects" />
      {formData.projects.map((proj, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input label="📌 Project Title" name="title" value={proj.title} onChange={(e) => handleChange(e, i, "projects")} required />
          <Input label="🔗 Link" name="link" value={proj.link} onChange={(e) => handleChange(e, i, "projects")} required />
          <Textarea label="📝 Description" name="description" value={proj.description} onChange={(e) => handleChange(e, i, "projects")} required />
        </div>
      ))}
      <AddButton label="Add Project" onClick={() => addField("projects")} />

      <SectionTitle title="🛠️ Skills" />
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.skillInput}
          onChange={(e) => setFormData({ ...formData, skillInput: e.target.value })}
          placeholder="Enter a skill ✍️"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={handleSkillAdd}>
          ➕ Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {formData.skills.map((skill, i) => (
          <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">🔥 {skill}</span>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-semibold rounded shadow hover:from-green-500 hover:to-green-700" onClick={handleSubmit}>
        📄 Preview My Resume
      </button>
    </div>
  );
};

const Input = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, required }) => (
  <div className="mb-4">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      required={required}
      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    ></textarea>
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4 border-b pb-1">{title}</h3>
);

const AddButton = ({ label, onClick }) => (
  <button
    type="button"
    className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium"
    onClick={onClick}
  >
    ➕ {label}
  </button>
);

export default ResumeBuilder;
