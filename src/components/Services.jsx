import React from 'react'
import { Clock, Users, CheckCircle } from 'lucide-react'

const Services = () => {
    const services = [
        {
            icon: <Clock className="w-12 h-12" />,
            title: "Anxiety Therapy in Santa Monica",
            description: "Supportive, evidence-based anxiety therapy for adults in Santa Monica. I help clients struggling with panic, constant worry, and feeling overwhelmed using CBT, EMDR, and mindfulness techniques to feel calmer and more grounded.",
            meta: "CBT, EMDR & mindfulness • In-person + CA telehealth"
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "Trauma-Informed Counseling in Santa Monica",
            description: "Compassionate trauma therapy for adults who've experienced trauma. Using EMDR and body-based methods, I provide paced, collaborative support focused on safety and healing. My approach helps clients feel more regulated in daily life.",
            meta: "EMDR & somatic therapy • Safe, collaborative"
        },
        {
            icon: <CheckCircle className="w-12 h-12" />,
            title: "Therapy for Burnout & Perfectionism",
            description: "Therapy for high-achieving adults dealing with burnout and perfectionism near Santa Monica. I offer warm, collaborative sessions using mindfulness and CBT to help you reconnect with yourself and develop sustainable ways of working.",
            meta: "Mindfulness & CBT • For professionals"
        }
    ]

    return (
        <section id="services" className="py-24 bg-cream">
            <div className="section-container">
                <h2 className="section-title">How I Can Help</h2>

                <div className="space-y-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex gap-6 group"
                            style={{
                                opacity: 0,
                                animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`
                            }}
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-serif text-primary-dark mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    {service.description}
                                </p>
                                <p className="text-sm text-gray-500">{service.meta}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
