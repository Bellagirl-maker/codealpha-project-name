// src/components/Preview.js

import React from 'react';

function Preview({ formData }) {
  // You can render a live preview of the user's data here
  return (
    <div>
      <h2>Live Preview</h2>
      <div>
        <strong>Name:</strong> {formData.name}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Education:</strong>
        <p>{formData.education}</p>
      </div>
      <div>
        <strong>Experience:</strong>
        <p>{formData.experience}</p>
      </div>
    </div>
  );
}

export default Preview;
