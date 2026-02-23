import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Highlights.css';

const CountUp = ({ to, suffix = "", duration = 2 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const nodeRef = useRef(null);

    useEffect(() => {
        const controls = animate(count, to, { duration });
        return controls.stop;
    }, [count, to, duration]);

    return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

const highlights = [
    { icon: '🏡', value: 15, suffix: ' Acres', label: 'Sprawling Township' },
    { icon: '👨‍👩‍👧‍👦', value: 288, suffix: '', label: 'Exclusive Families' },
    { icon: '✨', value: 25, suffix: '+', label: 'Premium Amenities' },
    { icon: '🏋️', value: 12000, suffix: ' sq.ft', label: 'Clubhouse' },
    { icon: '🌳', value: 1550, suffix: '+', label: 'Trees Planted' },
    { icon: '🏠', value: 'Garden', label: 'Villaments' }, // Non-numeric
];

const Highlights = () => {
    return (
        <section className="highlights" id="highlights">
            <div className="container">
                <div className="highlights__ribbon">
                    {highlights.map((item) => (
                        <div className="highlights__item" key={item.label}>
                            <span className="highlights__icon">{item.icon}</span>
                            <div className="highlights__content">
                                <span className="highlights__value">
                                    {typeof item.value === 'number' ? (
                                        <>
                                            <CountUp to={item.value} />
                                            {item.suffix}
                                        </>
                                    ) : (
                                        item.value
                                    )}
                                </span>
                                <span className="highlights__label">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
