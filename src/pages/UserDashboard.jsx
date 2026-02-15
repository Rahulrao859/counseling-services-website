import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <section className="pt-32 pb-24 bg-cream min-h-screen">
            <div className="section-container">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-serif text-primary-dark">
                        Welcome, {user?.firstName}
                    </h1>
                    <button onClick={handleLogout} className="btn-secondary">
                        Logout
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Upcoming Appointments */}
                    <div className="bg-white p-8 rounded-2xl shadow-md col-span-2">
                        <h2 className="text-2xl font-serif text-primary-dark mb-6">Upcoming Appointments</h2>
                        <div className="text-center py-12 bg-gray-50 rounded-xl">
                            <p className="text-gray-500 mb-4">No upcoming appointments scheduled.</p>
                            <button className="btn-primary">Book an Appointment</button>
                        </div>
                    </div>

                    {/* Profile Summary */}
                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <h2 className="text-2xl font-serif text-primary-dark mb-6">My Profile</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Full Name</p>
                                <p className="font-medium text-gray-800">{user?.fullName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-800">{user?.email}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium text-gray-800">{user?.phone || 'Not added'}</p>
                            </div>
                            <button className="text-primary hover:underline text-sm font-medium mt-2">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDashboard;
