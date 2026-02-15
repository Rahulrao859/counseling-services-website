import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const { user, loading, isAuthenticated } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && user?.role !== 'admin') {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default ProtectedRoute;
