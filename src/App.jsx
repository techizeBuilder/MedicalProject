import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import DoctorDashboard from './components/dashboards/DoctorDashboard';
import HospitalDashboard from './components/dashboards/HospitalDashboard';
import PharmacyDashboard from './components/dashboards/PharmacyDashboard';
import UserDashboard from './components/dashboards/UserDashboard';
import DiagnosticsDashboard from './components/dashboards/DiagnosticsDashboard';
import PathologyDashboard from './components/dashboards/PathologyDashboard';
import BloodBankDashboard from './components/dashboards/BloodBankDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import { ROLES } from './config/constants';

function NavigationButtons() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  if (isAuthenticated) {
    return (
      <div className="flex justify-end mb-4">
        <button
          onClick={logout}
          className="text-sm font-medium text-red-600 hover:text-red-500"
        >
          Logout
        </button>
      </div>
    );
  }

  if (!isLoginPage && !isRegisterPage) {
    return (
      <div className="mt-4 space-x-4">
        <Link
          to="/register"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Login
        </Link>
      </div>
    );
  }

  return null;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full mx-auto">
            <NavigationButtons />
            <div className="mt-8">
              <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route
                  path="/doctor/dashboard"
                  element={
                    <PrivateRoute allowedRoles={[ROLES.DOCTOR]}>
                      <DoctorDashboard />
                    </PrivateRoute>
                  }
                />
                {/* ... other routes ... */}
                <Route
                  path="/"
                  element={
                    <div className="text-center text-gray-600">
                      Please login or register to continue
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;