import React, { useState } from "react";

const ResumeBuilder = () => {
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

  const [showPreview, setShowPreview] = useState(false);

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

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Resume Builder</h2>

      {!showPreview ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
            <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
            <Input label="Headline" name="headline" value={formData.headline} onChange={handleChange} />
          </div>

          <Textarea label="Summary" name="summary" value={formData.summary} onChange={handleChange} />

          <SectionTitle title="Education" />
          {formData.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input label="School" name="school" value={edu.school} onChange={(e) => handleChange(e, i, "education")} />
              <Input label="Degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, i, "education")} />
              <Input label="Year" name="year" value={edu.year} onChange={(e) => handleChange(e, i, "education")} />
            </div>
          ))}
          <AddButton label="Add Education" onClick={() => addField("education")} />

          <SectionTitle title="Experience" />
          {formData.experience.map((exp, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input label="Company" name="company" value={exp.company} onChange={(e) => handleChange(e, i, "experience")} />
              <Input label="Role" name="role" value={exp.role} onChange={(e) => handleChange(e, i, "experience")} />
              <Input label="Duration" name="duration" value={exp.duration} onChange={(e) => handleChange(e, i, "experience")} />
            </div>
          ))}
          <AddButton label="Add Experience" onClick={() => addField("experience")} />

          <SectionTitle title="Projects" />
          {formData.projects.map((proj, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input label="Project Title" name="title" value={proj.title} onChange={(e) => handleChange(e, i, "projects")} />
              <Input label="Link" name="link" value={proj.link} onChange={(e) => handleChange(e, i, "projects")} />
              <Textarea label="Description" name="description" value={proj.description} onChange={(e) => handleChange(e, i, "projects")} />
            </div>
          ))}
          <AddButton label="Add Project" onClick={() => addField("projects")} />

          <SectionTitle title="Skills" />
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={formData.skillInput}
              onChange={(e) => setFormData({ ...formData, skillInput: e.target.value })}
              placeholder="Enter a skill"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSkillAdd}>
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {formData.skills.map((skill, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>

          <button className="w-full mt-4 py-3 bg-green-500 text-white rounded" onClick={() => setShowPreview(true)}>
            Preview Resume
          </button>
        </>
      ) : (
        <div className="p-4 bg-gray-50 border rounded shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{formData.name}</h2>
          <p className="text-sm text-gray-500">{formData.headline}</p>
          <p className="text-sm text-gray-500">{formData.email} | {formData.phone}</p>
          <p className="mt-4 text-gray-700">{formData.summary}</p>

          <SectionTitle title="Education" />
          {formData.education.map((edu, i) => (
            <p key={i} className="text-sm text-gray-600">{edu.degree} from {edu.school} ({edu.year})</p>
          ))}

          <SectionTitle title="Experience" />
          {formData.experience.map((exp, i) => (
            <p key={i} className="text-sm text-gray-600">{exp.role} at {exp.company} ({exp.duration})</p>
          ))}

          <SectionTitle title="Projects" />
          {formData.projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm font-semibold text-gray-700">{proj.title}</p>
              <p className="text-sm text-gray-600">{proj.description}</p>
              {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-500 text-sm">{proj.link}</a>}
            </div>
          ))}

          <SectionTitle title="Skills" />
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>

          <button className="mt-6 px-4 py-2 bg-gray-300 rounded" onClick={() => setShowPreview(false)}>
            Back to Edit
          </button>
        </div>
      )}
    </div>
  );
};

const Input = ({ label, name, value, onChange }) => (
  <div>
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-300"
    />
  </div>
);

const Textarea = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      className="w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-300"
    ></textarea>
  </div>
);

const SectionTitle = ({ title }) => (
  <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">{title}</h3>
);

const AddButton = ({ label, onClick }) => (
  <button
    type="button"
    className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
    onClick={onClick}
  >
    + {label}
  </button>
);

export default ResumeBuilder;