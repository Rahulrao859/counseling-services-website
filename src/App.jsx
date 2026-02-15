import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import CTAPrimary from './components/CTAPrimary';
import About from './components/About';
import Office from './components/Office';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Booking from './components/Booking';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Intro />
                <Services />
                <CTAPrimary />
                <About />
                <Office />
                <Contact />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/booking"
              element={
                <ProtectedRoute>
                  <div className="pt-32 pb-24 bg-cream min-h-screen">
                    <Booking />
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <ToastContainer position="bottom-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
