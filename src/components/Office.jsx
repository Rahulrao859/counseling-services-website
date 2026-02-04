import React from 'react'
import { MapPin, ExternalLink, Image } from 'lucide-react'

const Office = () => {
    return (
        <section id="office" className="py-24 bg-beige">
            <div className="section-container">
                <h2 className="section-title">Office</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Address Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-md h-fit">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-serif text-primary-dark">Address</h3>
                        </div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            123th Street 45 W<br />
                            Santa Monica, CA 90401
                        </p>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center justify-center gap-2"
                        >
                            <MapPin className="w-5 h-5" />
                            Get Directions
                        </a>
                    </div>

                    {/* Office Images */}
                    <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-md">
                        <div className="flex items-center gap-3 mb-6">
                            <Image className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-serif text-primary-dark">Office Images</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src="/office1.jpeg"
                                    alt="Dr. Maya Reynolds's Santa Monica Office - Interior View"
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <img
                                    src="/office2.jpeg"
                                    alt="Dr. Maya Reynolds's Santa Monica Office - Therapy Room"
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Office
