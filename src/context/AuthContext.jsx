import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/apiService';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if user is logged in on mount
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            const storedUser = localStorage.getItem('user');

            if (token && storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                    setIsAuthenticated(true);

                    // Verify token is still valid
                    const response = await authAPI.getMe();
                    setUser(response.data.data.user);
                } catch (error) {
                    // Token invalid, clear storage
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('user');
                    setUser(null);
                    setIsAuthenticated(false);
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await authAPI.login({ email, password });
            const { user, token, refreshToken } = response.data.data;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(user));

            setUser(user);
            setIsAuthenticated(true);

            toast.success('Login successful!');
            return { success: true, user };
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed';
            toast.error(message);
            return { success: false, error: message };
        }
    };

    const register = async (userData) => {
        try {
            const response = await authAPI.register(userData);
            const { user, token, refreshToken } = response.data.data;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(user));

            setUser(user);
            setIsAuthenticated(true);

            toast.success('Registration successful!');
            return { success: true, user };
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed';
            toast.error(message);
            return { success: false, error: message };
        }
    };

    const logout = async () => {
        try {
            await authAPI.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            setUser(null);
            setIsAuthenticated(false);
            toast.info('Logged out successfully');
        }
    };

    const updatePassword = async (currentPassword, newPassword) => {
        try {
            await authAPI.updatePassword({ currentPassword, newPassword });
            toast.success('Password updated successfully');
            return { success: true };
        } catch (error) {
            const message = error.response?.data?.message || 'Password update failed';
            toast.error(message);
            return { success: false, error: message };
        }
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        updatePassword,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
