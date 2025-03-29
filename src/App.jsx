import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LandingPage from './pages/LandingPage';
import MedicalRecordsDashboard from './pages/MedicalRecordsDashboard';
import LoginRegister from './pages/LoginRegister';
import Navbar from './components/Navbar';

// Protected Route Component
// const ProtectedRoute = ({ element: Component }) => {
//   const isAuthenticated = localStorage.getItem('token'); // Example authentication check
//   return isAuthenticated ? <Component /> : <Navigate to="/login" />;
// };

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Ensure Navbar is included globally */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/med-dashboard" element={<MedicalRecordsDashboard />} />
      </Routes>
    </Router>
  );
}
