import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const CircleSplitAnimation = ({ inView }) => {
  const controls = useAnimation();

  // Animation variants for the split effect
  const circleVariants = {
    initial: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  // Start animation when inView changes
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="sticky-circle-animation"
      style={{
        position: 'sticky',
        top: '50px', // Adjust top position as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px', // Adjust height as needed
        zIndex: 2, // Ensure it's above other content
      }}
    >
      <motion.div
        className="circle"
        variants={circleVariants}
        initial="initial"
        animate={controls}
        style={{
          width: '150px', // Adjust width as needed
          height: '150px', // Adjust height as needed
          borderRadius: '50%', // Ensure it's a circle
          border: '2px dashed #FFD700', // Hollow circle style
          backgroundColor: 'transparent', // Transparent background
          marginRight: '10px', // Spacing between circles
        }}
      />
      <motion.div
        className="circle"
        variants={circleVariants}
        initial="initial"
        animate={controls}
        style={{
          width: '150px', // Adjust width as needed
          height: '150px', // Adjust height as needed
          borderRadius: '50%', // Ensure it's a circle
          border: '2px dashed #FFD700', // Hollow circle style
          backgroundColor: 'transparent', // Transparent background
          marginLeft: '10px', // Spacing between circles
        }}
      />
    </motion.div>
  );
};

export default CircleSplitAnimation;