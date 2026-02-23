import { motion } from 'framer-motion';
import './Amenities.css';
import SpotlightCard from './ui/SpotlightCard';

const amenityCategories = [
    {
        category: 'Clubhouse & Lifestyle',
        items: [
            { title: 'Atlas Convention Center', icon: '🏛️', detail: '12,000 sq.ft Lifestyle Hub' },
            { title: 'Multi Pool', icon: '🏊', detail: 'Relaxation & Lap Pools' },
            { title: 'Bowling Alley', icon: '🎳', detail: 'Entertainment Hub' },
        ]
    },
    {
        category: 'Sports & Fitness',
        items: [
            { title: 'Indoor Sports', icon: '🏸', detail: 'Badminton & Squash Courts' },
            { title: 'Gymnasium', icon: '🏋️', detail: 'State-of-the-art Fitness' },
            { title: 'Outdoor Sports', icon: '⚽', detail: 'Soccer & Basketball Courts' },
        ]
    },
    {
        category: 'Nature & Outdoor',
        items: [
            { title: 'Nature Trail', icon: '🌿', detail: 'Pedestrian Green Walkways' },
            { title: 'Amphitheatre', icon: '🎭', detail: 'Community Events Space' },
            { title: 'Cycling Track', icon: '🚴', detail: 'Dedicated Active Paths' },
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
