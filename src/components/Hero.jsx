import React from 'react'

const Hero = () => {
    return (
        <section className="pt-32 pb-24 bg-gradient-to-br from-cream to-beige">
            <div className="section-container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
                            Therapist in <span className="text-primary">Santa Monica</span> helping you feel calmer every day
                        </h1>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            I'm a Santa Monica, CA therapist specializing in <strong>anxiety, trauma, burnout, and perfectionism</strong> for adults. I offer warm, collaborative therapy using <strong>CBT, EMDR, mindfulness, and body-based techniques</strong>—available in-person and via CA telehealth.
                        </p>
                        <a href="#contact" className="btn-primary">
                            Schedule a 15-min Chat
                        </a>
                    </div>

                    {/* Image */}
                    <div className="relative animate-fade-in flex items-center justify-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-auto bg-cream">
                            <img
                                src="/Dr. Maya Reynolds.png"
                                alt="Dr. Maya Reynolds"
                                className="h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
