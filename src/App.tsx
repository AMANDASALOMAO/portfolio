import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import './App.css';
import Work from './pages/work/Work';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="work">
                <Work />
              </div>
              <div id="services">
                <Services />
              </div>
          {/*    <div id="skills">
                <Skills />
              </div>
          */}
              <div id="contact">
                <Contact />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
