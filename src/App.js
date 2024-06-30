import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenPage from './components/MenPage/MenPage';
import WomenPage from './components/WomenPage/WomenPage';
import NavBar from './components/Navbar/NavBar';
// import CategoryDropdown from './components/Navbar/CategoryDropdown';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <CategoryDropdown/> */}
      <Routes>
        <Route path="/" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
