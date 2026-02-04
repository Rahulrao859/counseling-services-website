import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-cream py-16">
            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-12 mb-8">
                    {/* Main Info */}
                    <div>
                        <h3 className="text-2xl font-serif text-secondary mb-2">
                            Dr. Maya Reynolds, PsyD
                        </h3>
                        <p className="text-gray-300 mb-1">Licensed Clinical Psychologist</p>
                        <p className="text-gray-500 text-sm">
                        
                        </p>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-xl font-serif text-secondary mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">
                                    Anxiety Therapy
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">
                                    Trauma Therapy
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-secondary transition-colors">
                                    Couples Therapy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-serif text-secondary mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>123th Street 45 W</li>
                            <li>Santa Monica, CA 90401</li>
                            <li>(310) 555-1234</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
