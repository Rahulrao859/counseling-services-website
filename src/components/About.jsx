import React from 'react'

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="section-container">
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Profile Card */}
                    <div className="md:col-span-1">
                        <div className="sticky top-24 bg-cream rounded-2xl p-6 shadow-lg">
                            <div className="w-full overflow-hidden rounded-2xl mb-4 bg-white p-4">
                                <img
                                    src="/Dr. Maya Reynolds.png"
                                    alt="Dr. Maya Reynolds"
                                    className="w-full h-[300px] object-contain mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-serif text-primary-dark mb-2">
                                Dr. Maya Reynolds, PsyD
                            </h3>
                            <p className="text-gray-600">
                                Licensed Clinical Psychologist <em>(Fictional Therapist)</em>
                            </p>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="md:col-span-2">
                        <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-8">
                            About Dr. Maya Reynolds, PsyD
                        </h2>

                        <div className="space-y-6 text-gray-700 text-justify leading-relaxed">
                            <p>
                                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                            </p>

                            <p>
                                My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                            </p>

                            <p>
                                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
                            </p>

                            <p>
                                Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
                            </p>

                            <p>
                                In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
                            </p>

                            <p>
                                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                            </p>

                            <p>
                                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
                            </p>

                            <p>
                                If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
