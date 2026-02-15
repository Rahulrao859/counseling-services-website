import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHomePage = location.pathname === '/';

    const handleLogout = async () => {
        await logout();
        setIsMenuOpen(false);
    };

    const scrollToSection = (id) => {
        if (!isHomePage) return;

        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-white/90 shadow-sm py-6'
                }`}
        >
            <div className="section-container flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-semibold text-primary-dark hover:text-primary transition-colors">
                    Dr. Maya Reynolds
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {isHomePage ? (
                        <>
                            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                        </>
                    ) : (
                        <Link to="/" className="nav-link">Home</Link>
                    )}

                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/dashboard" className="text-primary hover:text-primary-dark font-medium">
                                Dashboard
                            </Link>
                            <button onClick={handleLogout} className="btn-secondary px-4 py-2 text-sm">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="px-6 py-2.5 bg-secondary text-gray-900 font-medium rounded-lg hover:bg-accent hover:text-white transition-all duration-300">
                            Book Consultation
                        </Link>
                    )}
                </div>

                <button
                    className="md:hidden text-primary-dark"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4">
                    <div className="flex flex-col space-y-4 px-6">
                        {isHomePage ? (
                            <>
                                <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 font-medium py-2">Services</button>
                                <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 font-medium py-2">About</button>
                                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 font-medium py-2">Contact</button>
                            </>
                        ) : (
                            <Link to="/" className="text-gray-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        )}

                        {user ? (
                            <>
                                <Link to="/dashboard" className="text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                                    Dashboard
                                </Link>
                                <button onClick={handleLogout} className="text-left text-gray-600 font-medium py-2">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="btn-primary text-center mt-2" onClick={() => setIsMenuOpen(false)}>
                                Book Consultation
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
