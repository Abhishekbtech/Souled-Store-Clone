import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import SecondNavbar from './components/Navbar/SecondNavbar';
import Home from './components/HomePage/HomePage';
import Men from './components/MenPage/MenPage';
import Women from './components/WomenPage/WomenPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SecondNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;