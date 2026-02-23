import { motion } from 'framer-motion';
import './Amenities.css';
import SpotlightCard from './ui/SpotlightCard';

const amenityCategories = [
    {
        category: 'Clubhouse & Lifestyle',
        items: [
            {
                title: 'Atlas Convention Center',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" /><path d="M5 21V10.85" /><path d="M19 21V10.85" /><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" /></svg>,
                detail: '12,000 sq.ft Lifestyle Hub'
            },
            {
                title: 'Multi Pool',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>,
                detail: 'Relaxation & Lap Pools'
            },
            {
                title: 'Bowling Alley',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 15l2 2" /><path d="M13 13l2 2" /><path d="M11 9l2 2" /><circle cx="15" cy="15" r="3" /><circle cx="16" cy="16" r=".5" /><path d="M10 5l-1.5 1.5M14 9l-1.5 1.5" /><circle cx="20" cy="4" r="2" /></svg>,
                detail: 'Entertainment Hub'
            },
        ]
    },
    {
        category: 'Sports & Fitness',
        items: [
            {
                title: 'Indoor Sports',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10l5 5 10-10-5-5L2 10z" /><path d="M7 15l5 5 10-10-5-5-10 10z" /></svg>,
                detail: 'Badminton & Squash Courts'
            },
            {
                title: 'Gymnasium',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5L3 3" /><path d="M17.5 17.5L21 21" /><path d="M17.5 6.5L21 3" /><path d="M6.5 17.5L3 21" /><path d="M8 10v4" /><path d="M16 10v4" /><path d="M5 12h14" /></svg>,
                detail: 'State-of-the-art Fitness'
            },
            {
                title: 'Outdoor Sports',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
                detail: 'Soccer & Basketball Courts'
            },
        ]
    },
    {
        category: 'Nature & Outdoor',
        items: [
            {
                title: 'Nature Trail',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7a3 3 0 0 0-3-3H9m3 10V10a5 5 0 0 1 5-5h1" /><path d="M12 22V9a7 7 0 0 0-7-7H4" /></svg>,
                detail: 'Pedestrian Green Walkways'
            },
            {
                title: 'Amphitheatre',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-6" /><path d="M12 16a6 6 0 1 0-6-6" /><path d="M12 16a6 6 0 1 1 6-6" /><path d="M12 2v4" /><path d="M12 22a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" /></svg>,
                detail: 'Community Events Space'
            },
            {
                title: 'Cycling Track',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" /><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-2-3H6" /><path d="M12 17.5V14l3-2h4" /></svg>,
                detail: 'Dedicated Active Paths'
            },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Amenities = () => {
    return (
        <section className="amenities section noise-overlay" id="amenities">
            <div className="container">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Lifestyle</span>
                    <h2 className="section-title">25+ World-Class Amenities</h2>
                    <p className="section-subtitle">
                        From the Atlas Convention Center to tranquil nature trails — every amenity is
                        crafted for an elite community of 288 families.
                    </p>
                </motion.div>

                <div className="amenities__categories">
                    {amenityCategories.map((cat) => (
                        <div className="amenities__cat-block" key={cat.category}>
                            <motion.h3
                                className="amenities__cat-title"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                {cat.category}
                            </motion.h3>
                            <motion.div
                                className="amenities__grid"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {cat.items.map((item) => (
                                    <motion.div variants={itemVariants} key={item.title}>
                                        <SpotlightCard className="amenities__card">
                                            <div className="amenities__card-header">
                                                <span className="amenities__card-icon">{item.icon}</span>
                                            </div>
                                            <div className="amenities__card-body">
                                                <h4 className="amenities__card-title">{item.title}</h4>
                                                <p className="amenities__card-detail">{item.detail}</p>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
