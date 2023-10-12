// src/App.js

import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';
import Resume from './components/Resume';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
  });

  return (
    <div>
      <Header />
      <Form formData={formData} setFormData={setFormData} />
      <Preview formData={formData} />
      <Resume formData={formData} />
    </div>
  );
}

export default App;
