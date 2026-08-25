import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing all the themes
import ThemeOne from "../themes/theme-one";
import Portfolio from "../themes/portfolio";
import PortfolioSingle from "../themes/portfolio-single";
import About from "../themes/about";
import Ai from "../themes/ai";
import Contact from "../themes/contact";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeOne />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Every project gets its own permalink: /portfolio/<slug> */}
        <Route path="/portfolio/:slug" element={<PortfolioSingle />} />
        {/* Legacy template route — kept so old links do not 404 */}
        <Route path="/portfolio-single" element={<Navigate to="/portfolio" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/contact" element={<Contact />} />
        {/* Anything else */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
