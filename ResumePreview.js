// src/components/ResumePreview.js
import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview" id="resume">
      <h2>{data.name || 'Your Name'}</h2>
      <p>Email: {data.email || 'your.email@example.com'}</p>
      <p>Phone: {data.phone || '123-456-7890'}</p>
      <p>Address: {data.address || 'Your Address'}</p>

      <h3>Education</h3>
      <p>{data.education || 'Your Education Details'}</p>

      <h3>Experience</h3>
      <p>{data.experience || 'Your Experience Details'}</p>
    </div>
  );
};

export default ResumePreview;
