import React from 'react'

const Navigation = ({ isScrolled }) => {
    const scrollToSection = (e, id) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-white/90 shadow-md'
            }`}>
            <div className="section-container">
                <div className="flex justify-between items-center py-6">
                    <a href="#" className="text-2xl font-serif font-semibold text-primary-dark hover:text-primary transition-colors">
                        Dr. Maya Reynolds, PsyD
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#about"
                            onClick={(e) => scrollToSection(e, 'about')}
                            className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                        <a
                            href="#services"
                            onClick={(e) => scrollToSection(e, 'services')}
                            className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                        <a
                            href="#office"
                            onClick={(e) => scrollToSection(e, 'office')}
                            className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
                        >
                            Office
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, 'contact')}
                            className="px-6 py-2.5 bg-secondary text-gray-900 font-medium rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
                        >
                            Book a Free Consult
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
