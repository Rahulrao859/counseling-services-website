import { useState } from 'react';
import { contactAPI } from '../services/apiService';
import { toast } from 'react-toastify';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
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

        try {
            await contactAPI.submit(formData);
            toast.success('Message sent successfully! We\'ll get back to you within 24-48 hours.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to send message. Please try again.';
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-cream">
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="text-gray-600">
                            Ready to take the next step? Send me a message and I'll respond within 24-48 hours.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="md:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-4 text-primary-dark mb-2">
                                    <Phone className="w-5 h-5" />
                                    <span className="font-serif text-lg">Phone</span>
                                </div>
                                <p className="text-gray-600">(310) 555-1234</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <div className="flex items-center gap-4 text-primary-dark mb-2">
                                    <Mail className="w-5 h-5" />
                                    <span className="font-serif text-lg">Email</span>
                                </div>
                                <p className="text-gray-600">hello@drmayareynolds.com</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-2">
                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                            Phone (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Subject"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Tell me a bit about what brings you here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
