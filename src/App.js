// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavigationBar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
          <NavigationBar />
        <main className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 Supratim Auddy</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
