import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing all the themes
import ThemeOne from "../themes/theme-one";
import PortfolioSingle from "../themes/portfolio-single";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Works, About, AI and Contact all live as sections on this single page */}
        <Route path="/" element={<ThemeOne />} />
        {/* Every project gets its own permalink: /portfolio/<slug> */}
        <Route path="/portfolio/:slug" element={<PortfolioSingle />} />
        {/* Legacy page routes — kept so old links/bookmarks land on the right section instead of 404ing */}
        <Route path="/portfolio" element={<Navigate to="/#works" replace />} />
        <Route path="/portfolio-single" element={<Navigate to="/#works" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/ai" element={<Navigate to="/#ai" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        {/* Anything else */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
