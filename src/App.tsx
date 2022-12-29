import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home, ContactUs } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wed-lawns" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
