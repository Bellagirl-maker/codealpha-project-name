// src/components/Resume.js

import React from 'react';

function Resume({ formData }) {
  // You can render the final resume based on the user's data here
  return (
    <div>
      <h2>Resume</h2>
      <div>
        <h3>{formData.name}</h3>
        <p>Email: {formData.email}</p>
      </div>
      <div>
        <h3>Education</h3>
        <p>{formData.education}</p>
      </div>
      <div>
        <h3>Experience</h3>
        <p>{formData.experience}</p>
      </div>
    </div>
  );
}

export default Resume;
