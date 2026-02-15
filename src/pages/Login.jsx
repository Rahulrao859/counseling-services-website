import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await login(formData.email, formData.password);
        setLoading(false);
        if (result.success) {
            if (result.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/dashboard');
            }
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-24 bg-cream flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-serif text-primary-dark mb-6 text-center">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary hover:underline font-medium">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
