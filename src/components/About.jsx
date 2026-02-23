import { motion } from 'framer-motion';
import './About.css';
import TiltedCard from './ui/TiltedCard';

const About = () => {
    return (
        <section className="about section noise-overlay" id="about">
            <div className="container">
                <div className="about__grid">
                    <motion.div
                        className="about__image-col"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <TiltedCard
                            imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                            altText="Provident Deansgate luxury lifestyle"
                            containerHeight="580px"
                            captionText="Manchester Inspired Living"
                        />
                    </motion.div>
                    <motion.div
                        className="about__text-col"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label">About the Project</span>
                        <h2 className="section-title">A Manchester-Inspired<br />Lifestyle Awaits</h2>
                        <p className="about__description">
                            Provident Deansgate brings the charm of Manchester's iconic Deansgate district to
                            North Bengaluru. Established in 2008, <strong>Provident Housing Limited</strong>
                            (a 100% subsidiary of Puravankara Limited) is a customer-centric developer
                            focused on innovation and lifestyle enhancement.
                        </p>
                        <p className="about__description">
                            With 1550+ trees and a 12,000 sq.ft clubhouse, Deansgate is designed to harmonize
                            luxury with nature. It's a premium township offering 3 BHK Garden and Terrace Villaments
                            for 288 exclusive families.
                        </p>

                        <div className="about__stats">
                            {[
                                { num: '15+', label: 'Years of Trust' },
                                { num: '9+', label: 'Cities Present' },
                                { num: '50K+', label: 'Happy Customers' },
                                { num: '12.8M', label: 'Sq.ft Delivered' }
                            ].map((stat, index) => (
                                <motion.div
                                    className="about__stat"
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                >
                                    <span className="about__stat-num">{stat.num}</span>
                                    <span className="about__stat-label">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="about__features">
                            <motion.div
                                className="about__feature"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="about__feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                                        <path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" /><path d="M5 21V10.85" /><path d="M19 21V10.85" /><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Premium Architecture</strong>
                                    <p>Manchester-inspired facades with modern interiors</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="about__feature"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                <span className="about__feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                                        <path d="M12 22v-7a3 3 0 0 0-3-3H9m3 10V10a5 5 0 0 1 5-5h1" /><path d="M12 22V9a7 7 0 0 0-7-7H4" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Sustainability Focus</strong>
                                    <p>Rainwater harvesting & solar-powered common areas</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
