import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./TiltedCard.css";

const TiltedCard = ({
    imageSrc,
    altText,
    captionText,
    containerHeight = "400px",
    containerWidth = "100%",
    scaleOnHover = 1.05,
    rotateAmplitude = 15,
    showMobileTakeover = true,
}) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className="tilted-card-container"
            style={{ height: containerHeight, width: containerWidth }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
        >
            <motion.div
                className="tilted-card-inner"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: scaleOnHover }}
            >
                <img
                    src={imageSrc}
                    alt={altText}
                    className="tilted-card-image"
                />
                {captionText && (
                    <div className="tilted-card-caption">
                        <p>{captionText}</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default TiltedCard;
