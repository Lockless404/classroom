import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Input from './components/Input';
import Output from './components/Output';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
