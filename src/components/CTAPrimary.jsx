import React from 'react'

const CTAPrimary = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Ready to Take the First Step?
                    </h2>
                    <p className="text-xl mb-8 opacity-95 leading-relaxed">
                        Schedule a free 15-minute consultation to see if we're a good fit. No pressure—just a chance to talk about what you're experiencing and how therapy might help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-10 py-4 bg-white text-primary-dark font-semibold text-lg rounded-lg shadow-lg hover:bg-secondary hover:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Schedule a Free Consult
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTAPrimary
