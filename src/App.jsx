import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));
const News = lazy(() => import("./components/News"));
const Career = lazy(() => import("./components/Career"));
const Contact = lazy(() => import("./components/Contact"));

// Protect dashboard or any route
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
  return user ? children : <Navigate to="/login" />;
};

// Home page layout



function App() {

  return (
    <AuthProvider>
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Dashboard */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Unknown route fallback */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
