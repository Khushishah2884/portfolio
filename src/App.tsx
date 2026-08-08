import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about"    element={<About />} />
              <Route path="/contact"  element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;