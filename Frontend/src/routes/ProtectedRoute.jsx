import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

// Check if user is authenticated using JWT token
const ProtectedRoute = () => {
  const authenticated = isAuthenticated(); 

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
