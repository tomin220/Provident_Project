import { motion } from 'framer-motion';
import './Hero.css';
import EnquiryForm from './EnquiryForm';
import BlurText from './ui/BlurText';
import ShinyText from './ui/ShinyText';
import Magnet from './ui/Magnet';

const Hero = () => {
    return (
        <section className="hero noise-overlay" id="hero">
            <div className="hero__overlay" />

            <div className="hero__content container">
                <div className="hero__grid">
                    <div className="hero__text">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <ShinyText
                                text="A Manchester Inspired Township"
                                className="hero__eyebrow"
                            />
                        </motion.div>

                        <BlurText
                            text="Start Living the English Life"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="hero__title"
                        />

                        <motion.p
                            className="hero__subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Manchester-inspired luxury township bringing an elite architectural lifestyle to North Bengaluru.
                            Homes designed for more, spread across 15 pristine acres.
                        </motion.p>

                        <motion.div
                            className="hero__actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Magnet padding={20}>
                                <a href="#amenities" className="btn btn-primary">Explore Lifestyle</a>
                            </Magnet>
                            <Magnet padding={20}>
                                <a href="#floorplans" className="btn btn-outline">Floor Plans</a>
                            </Magnet>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero__form-wrapper"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <EnquiryForm
                            title="Book Your Visit Now"
                            subtitle="Register for exclusive offers & priority access."
                        />
                    </motion.div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>Scroll</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
};

export default Hero;
