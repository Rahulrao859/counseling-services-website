import React from 'react'
import { Phone, Mail } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-cream">
            <div className="section-container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6">
                        Ready to Begin?
                    </h2>
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                        Schedule a free 15-minute consultation to see if we're a good fit. I offer both in-person sessions in Santa Monica and secure telehealth for clients throughout California.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center">
                        <a
                            href="tel:+13105551234"
                            className="btn-primary flex items-center gap-3"
                        >
                            <Phone className="w-5 h-5" />
                            Call (310) 555-1234
                        </a>
                        <a
                            href="mailto:hello@drmayareynolds.com"
                            className="btn-secondary flex items-center gap-3"
                        >
                            <Mail className="w-5 h-5" />
                            Email Dr. Reynolds
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
