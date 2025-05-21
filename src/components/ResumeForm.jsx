import React, { useState } from 'react';

const ResumeForm = ({ template }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: {
      linkedin: '',
      github: ''
    },
    education: {
      university: '',
      marks: '',
      cgpa: '',
      courses: ''
    },
    skills: '',
    projects: '',
    experience: '',
    certificationsAndAchievements: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.contact) {
      setFormData({
        ...formData,
        contact: {
          ...formData.contact,
          [name]: value
        }
      });
    } else if (name in formData.education) {
      setFormData({
        ...formData,
        education: {
          ...formData.education,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Create Your Resume - {template} Template</h2>

      <form className="space-y-6">
        {/* Personal Information */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Contact Information (LinkedIn, GitHub) */}
        <div className="space-y-4">
          <label htmlFor="contact" className="block text-gray-700 font-medium">Contact Information</label>
          <input
            id="linkedin"
            name="linkedin"
            type="url"
            value={formData.contact.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            id="github"
            name="github"
            type="url"
            value={formData.contact.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <label htmlFor="education" className="block text-gray-700 font-medium">Education</label>
          <div className="space-y-2">
            <input
              id="university"
              name="university"
              type="text"
              value={formData.education.university}
              onChange={handleChange}
              placeholder="University Name"
              className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex space-x-4">
              <input
                id="marks"
                name="marks"
                type="text"
                value={formData.education.marks}
                onChange={handleChange}
                placeholder="Marks (%)"
                className="w-1/2 mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                id="cgpa"
                name="cgpa"
                type="text"
                value={formData.education.cgpa}
                onChange={handleChange}
                placeholder="CGPA"
                className="w-1/2 mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              id="courses"
              name="courses"
              type="text"
              value={formData.education.courses}
              onChange={handleChange}
              placeholder="Courses Taken (comma-separated)"
              className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <label htmlFor="skills" className="block text-gray-700 font-medium">Skills</label>
          <input
            id="skills"
            name="skills"
            type="text"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Enter your skills (comma separated)"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Projects Section */}
        <div>
          <label htmlFor="projects" className="block text-gray-700 font-medium">Projects (with live links)</label>
          <textarea
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            placeholder="Describe your projects and include live working links"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
          />
        </div>

        {/* Experience Section */}
        <div>
          <label htmlFor="experience" className="block text-gray-700 font-medium">Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your work experience"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
          />
        </div>

        {/* Certifications & Achievements Section */}
        <div>
          <label htmlFor="certificationsAndAchievements" className="block text-gray-700 font-medium">Certifications & Achievements</label>
          <textarea
            id="certificationsAndAchievements"
            name="certificationsAndAchievements"
            value={formData.certificationsAndAchievements}
            onChange={handleChange}
            placeholder="Describe your certifications and achievements"
            className="w-full mt-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
