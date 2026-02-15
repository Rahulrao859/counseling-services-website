import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

// Request interceptor - add auth token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - handle token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If token expired, try to refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (refreshToken) {
                    const response = await axios.post(
                        `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/refresh`,
                        { refreshToken }
                    );

                    const { token } = response.data.data;
                    localStorage.setItem('token', token);

                    // Retry original request with new token
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                // Refresh failed, logout user
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
