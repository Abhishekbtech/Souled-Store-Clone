import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MenPage from './components/MenPage/MenPage';
import WomenPage from './components/WomenPage/WomenPage';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
