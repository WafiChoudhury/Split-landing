import React, { useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import '../styles/CirclesAnimation.css';

const CirclesAnimation = () => {
    const { scrollY } = useViewportScroll();

    useEffect(() => {
        const lockScroll = () => {
            const mainContentContainer = document.querySelector('.scrollable-content');
            const circles = document.querySelector('.sticky-container');
            
            if (scrollY.get() < 5050) {
                mainContentContainer.style.overflow = 'hidden';
                circles.style.position = 'sticky'; // or 'fixed' if needed
            } else {
                mainContentContainer.style.overflow = 'auto';
                circles.style.position = 'relative'; // Reset to normal flow
            }
        };

        const unsubscribeScroll = scrollY.onChange(() => lockScroll());

        return () => {
            unsubscribeScroll();
            // Reset styles on unmount or cleanup
            const mainContentContainer = document.querySelector('.scrollable-content');
            const circles = document.querySelector('.sticky-container');
            if (mainContentContainer) {
                mainContentContainer.style.overflow = 'auto';
            }
            if (circles) {
                circles.style.position = 'relative';
            }
        };
    }, [scrollY]);

    const xTransforms = [
        useTransform(scrollY, [0, 600], [0, -300]),
        useTransform(scrollY, [0, 600], [0, -250]),
        useTransform(scrollY, [0, 600], [0, -200]),
        useTransform(scrollY, [0, 600], [0, 200]),
        useTransform(scrollY, [0, 600], [0, 250]),
        useTransform(scrollY, [0, 600], [0, 300]),
    ];

    const scales = [
        useTransform(scrollY, [0, 600], [1, 0.5]),
        useTransform(scrollY, [0, 600], [1, 0.7]),
        useTransform(scrollY, [0, 600], [1, 0.8]),
        useTransform(scrollY, [0, 600], [1, 0.8]),
        useTransform(scrollY, [0, 600], [1, 0.7]),
        useTransform(scrollY, [0, 600], [1, 0.5]),
    ];

    const colors = ['purple', 'white', 'purple', 'white', 'purple', 'white'];

    return (
        <div className="circles-container">
            {xTransforms.map((x, index) => (
                <motion.div
                    key={index}
                    className="circle"
                    style={{
                        scale: scales[index],
                        x: x,
                        borderColor: colors[index],
                    }}
                />
            ))}
        </div>
    );
};

export default CirclesAnimation;