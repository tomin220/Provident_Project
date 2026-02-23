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
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        value: 15, suffix: ' Acres', label: 'Sprawling Township'
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        value: 288, suffix: '', label: 'Exclusive Families'
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
        value: 25, suffix: '+', label: 'Premium Amenities'
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
        value: 12000, suffix: ' sq.ft', label: 'Clubhouse'
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7a3 3 0 0 0-3-3H9m3 10V10a5 5 0 0 1 5-5h1" /><path d="M12 22V9a7 7 0 0 0-7-7H4" /></svg>,
        value: 1550, suffix: '+', label: 'Trees Planted'
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM9 9h6v6H9z" /></svg>,
        value: 'Garden', label: 'Villaments'
    },
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
