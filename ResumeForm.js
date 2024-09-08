// src/components/ResumeForm.js
import React, { useState } from 'react';

const ResumeForm = ({ onFormChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    onFormChange({ ...formData, [name]: value });
  };

  return (
    <div className="resume-form">
      <h2>Fill Your Resume Details</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />

        <label>Education:</label>
        <textarea name="education" value={formData.education} onChange={handleChange} />

        <label>Experience:</label>
        <textarea name="experience" value={formData.experience} onChange={handleChange} />
      </form>
    </div>
  );
};

export default ResumeForm;
