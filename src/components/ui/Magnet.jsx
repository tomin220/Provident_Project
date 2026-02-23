import { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Magnet = ({ children, padding = 40, disabled = false }) => {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        if (disabled) return;

        const handleMouseMove = (e) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();

            const center = { x: left + width / 2, y: top + height / 2 };
            const distance = Math.hypot(clientX - center.x, clientY - center.y);

            if (distance < padding + width / 2) {
                setIsActive(true);
                const newX = (clientX - center.x) * 0.45;
                const newY = (clientY - center.y) * 0.45;
                x.set(newX);
                y.set(newY);
            } else {
                setIsActive(false);
                x.set(0); y.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [padding, disabled, x, y]);

    return (
        <motion.div
            ref={ref}
            style={{
                x: springX,
                y: springY,
                position: 'relative',
                display: 'inline-block'
            }}
        >
            {children}
        </motion.div>
    );
};

export default Magnet;
