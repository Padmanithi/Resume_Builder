// src/App.js
import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
  });

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const handleDownloadPDF = () => {
    const resume = document.getElementById('resume');
    html2canvas(resume).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className="app">
      <div className="form-container">
        <ResumeForm onFormChange={handleFormChange} />
      </div>
      <div className="preview-container">
        <ResumePreview data={formData} />
        <button onClick={handleDownloadPDF}>Download Resume as PDF</button>
      </div>
    </div>
  );
};

export default App;
