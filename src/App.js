// src/App.js

import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Preview from './components/Preview';
import Resume from './components/Resume';

function App() {
  // State and data management can go here

  return (
    <div>
      <Header />
      <Form />
      <Preview />
      <Resume />
    </div>
  );
}

export default App;
