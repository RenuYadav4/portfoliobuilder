import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeTemplate = () => {
  const { state: data } = useLocation();
  const printableRef = useRef();

  const handleDownload = async () => {
    const element = printableRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${data?.name || "resume"}.pdf`);
    } catch (err) {
      console.error("❌ PDF generation failed:", err);
    }
  };

  if (!data) return <p>No data found.</p>;

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md"
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: "#1F2937", // Dark gray
      }}
    >
      <button
        onClick={handleDownload}
        className="mb-6 px-5 py-2 rounded cursor-pointer hover:bg-gray-300 transition-colors duration-300"
        style={{
          backgroundColor: "#6B7280", // Gray 500
          color: "#F9FAFB", // Gray 50 - almost white
          fontWeight: "600",
          fontSize: "16px",
          border: "none",
        }}
      >
        📥 Export / Download PDF
      </button>

      <div
        ref={printableRef}
        style={{
          backgroundColor: "#fff",
          padding: "30px 40px",
          borderRadius: "6px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          lineHeight: 1.5,
          fontSize: "16px",
          color: "#111827", // Very dark gray for main text
        }}
      >
        {/* Header */}
        <header
          style={{
            borderBottom: "1.5px solid #D1D5DB", // Light gray border
            paddingBottom: "14px",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              letterSpacing: "0.05em",
              margin: 0,
              color: "#111827",
            }}
          >
            {data.name}
          </h1>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#4B5563", // Medium gray
              margin: "6px 0 2px",
            }}
          >
            {data.headline}
          </p>
          <p style={{ fontSize: "14px", color: "#6B7280" }}>
            📧 {data.email} | 📞 {data.phone}
          </p>
        </header>

        {/* Sections */}
        <section>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#374151", // Dark gray
              marginBottom: "8px",
              borderBottom: "1.5px solid #E5E7EB", // Very light gray
              paddingBottom: "6px",
            }}
          >
            Summary
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "16px", color: "#111827" }}>
            {data.summary}
          </p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "8px",
              borderBottom: "1.5px solid #E5E7EB",
              paddingBottom: "6px",
            }}
          >
            Education
          </h2>
          {data.education.map((edu, i) => (
            <div
              key={i}
              style={{ marginBottom: "14px", fontSize: "16px", color: "#111827" }}
            >
              <strong style={{ fontWeight: "700" }}>{edu.degree}</strong> —{" "}
              <span>{edu.school}</span>
              <div style={{ fontSize: "14px", color: "#6B7280" }}>📅 {edu.year}</div>
            </div>
          ))}
        </section>

        <section>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "8px",
              borderBottom: "1.5px solid #E5E7EB",
              paddingBottom: "6px",
            }}
          >
            Experience
          </h2>
          {data.experience.map((exp, i) => (
            <div
              key={i}
              style={{ marginBottom: "14px", fontSize: "16px", color: "#111827" }}
            >
              <strong style={{ fontWeight: "700" }}>{exp.role}</strong> —{" "}
              <span>{exp.company}</span>
              <div style={{ fontSize: "14px", color: "#6B7280" }}>🕒 {exp.duration}</div>
            </div>
          ))}
        </section>

        <section>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "8px",
              borderBottom: "1.5px solid #E5E7EB",
              paddingBottom: "6px",
            }}
          >
            Projects
          </h2>
          {data.projects.map((proj, i) => (
            <div
              key={i}
              style={{ marginBottom: "14px", fontSize: "16px", color: "#111827" }}
            >
              <strong style={{ fontWeight: "700" }}>{proj.title}</strong>
              <div>{proj.description}</div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#374151",
                    fontSize: "14px",
                    textDecoration: "underline",
                  }}
                >
                  🔗 {proj.link}
                </a>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "8px",
              borderBottom: "1.5px solid #E5E7EB",
              paddingBottom: "6px",
            }}
          >
            Skills
          </h2>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              fontSize: "16px",
              color: "#111827",
              paddingLeft: 0,
              listStyle: "none",
              marginTop: "8px",
            }}
          >
            {data.skills.map((skill, i) => (
              <li
                key={i}
                style={{
                  background: "#F3F4F6", // Light gray background
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: "600",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumeTemplate;