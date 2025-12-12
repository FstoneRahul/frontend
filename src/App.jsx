import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));
const News = lazy(() => import("./components/News"));
const Career = lazy(() => import("./components/Career"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

          {/* Unknown route fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
