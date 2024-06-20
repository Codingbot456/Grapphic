import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../layout/Nav'; // Check the correct path
import Home from '../../pages/Home';
import About from '../../pages/About';
import { Portfolio } from '../../pages/Portfolio';

function AppRouter() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
