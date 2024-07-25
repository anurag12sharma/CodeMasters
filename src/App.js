import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './components/Courses';
import Tutorial from './components/Tutorial';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className='overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Analytics/>
        <Newsletter/>
        <Cards/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
