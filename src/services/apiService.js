import api from './api';

// Authentication API
export const authAPI = {
    register: (userData) => api.post('/auth/register', userData),
    login: (credentials) => api.post('/auth/login', credentials),
    logout: () => api.post('/auth/logout'),
    getMe: () => api.get('/auth/me'),
    updatePassword: (data) => api.put('/auth/password', data),
    refreshToken: (refreshToken) => api.post('/auth/refresh', { refreshToken }),
};

// Appointments API
export const appointmentsAPI = {
    getAvailability: (date) => api.get(`/appointments/availability/${date}`),
    create: (appointmentData) => api.post('/appointments', appointmentData),
    getAll: (params) => api.get('/appointments', { params }),
    getOne: (id) => api.get(`/appointments/${id}`),
    update: (id, data) => api.patch(`/appointments/${id}`, data),
    cancel: (id, reason) => api.delete(`/appointments/${id}`, { data: { reason } }),
};

// Contact API
export const contactAPI = {
    submit: (formData) => api.post('/contact', formData),
    getAll: (params) => api.get('/contact', { params }), // Admin only
    getOne: (id) => api.get(`/contact/${id}`), // Admin only
    update: (id, data) => api.patch(`/contact/${id}`, data), // Admin only
    delete: (id) => api.delete(`/contact/${id}`), // Admin only
};

// Blog API
export const blogAPI = {
    getAll: (params) => api.get('/blog', { params }),
    getOne: (slug) => api.get(`/blog/${slug}`),
    create: (postData) => api.post('/blog', postData), // Admin only
    update: (id, data) => api.patch(`/blog/${id}`, data), // Admin only
    delete: (id) => api.delete(`/blog/${id}`), // Admin only
};

// Testimonials API
export const testimonialsAPI = {
    submit: (testimonialData) => api.post('/testimonials', testimonialData),
    getAll: (params) => api.get('/testimonials', { params }),
    getOne: (id) => api.get(`/testimonials/${id}`), // Admin only
    update: (id, data) => api.patch(`/testimonials/${id}`, data), // Admin only
    delete: (id) => api.delete(`/testimonials/${id}`), // Admin only
};

// Health check
export const healthAPI = {
    check: () => api.get('/health'),
};
