import React from 'react';

const templates = ['classic', 'modern', 'minimal'];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="mb-6 flex gap-4">
      {templates.map(temp => (
        <button
          key={temp}
          onClick={() => setSelectedTemplate(temp)}
          className={`px-4 py-2 rounded-lg border ${
            selectedTemplate === temp
              ? 'bg-gray-700 text-white border-gray-500'
              : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
          }`}
        >
          {temp.charAt(0).toUpperCase() + temp.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
