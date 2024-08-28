import React from 'react';
import { motion } from 'framer-motion';
import '../styles/App.css'; // Assuming you have a CSS file for styling
import imageFile from '../shader.png'; // Update with the correct path to your image file
import secondImage from '../shader2.png'; // Update with the correct path to your image file
import thirdImage from '../shader3.png'; // Update with the correct path to your image file
import { useState } from 'react';
import { useEffect } from 'react';
import JoinWaitlistButton from './JoinWaitlistButton'; // Import JoinWaitlistButton component
import ReadMoreButton from './ReadMoreButton';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const circleVariants = {
  hidden: { 
    opacity: 0,
    pathLength: 0,
    cx: 200
  },
  visible: (custom) => ({
    opacity: 1,
    pathLength: 1,
    cx: 200 + (custom * 90),
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
      cx: { duration: 2, ease: "easeInOut", delay: 2 } // Delay the split
    }
  }),
  hover: {
    scale: 0.9,
    transition: {
      duration: 0.2,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  }
};

const useInView = (options) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, inView];
};

const PageComponent = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  return (
    <div className="page-wrapper">
      <motion.h1
        className="subtitle"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SplitAI
      </motion.h1>
      
      <motion.h1
              className="title"

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
       <span style={{ display: 'block', marginBottom: '20px' }}>
    Monetize your GPU
  </span>
  <span style={{ display: 'block' }}>
    Power ML Developers
  </span>

        </motion.h1>

      <div className="image-container">
        <motion.svg
          className="circle-svg"
          viewBox="0 0 400 200"
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            variants={circleVariants}
            custom={-1}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            variants={circleVariants}
            custom={1}
          />
        </motion.svg>
      </div>
      <div className='first-wrapper'>
       

            </div>

      <section className="cta-section">
        <JoinWaitlistButton /> 
      </section>

      <section className="info-section">
        <div className="info-block" ref={ref1}>
          <motion.div
            className="info-image-container"
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <img src={secondImage} className="info-image" alt="Make Money" />
          </motion.div>
          <div className="info-text">
            <h2 className="info-title">Make Money</h2>
            <p className="info-description">
              Get paid by the hour while Split runs quietly in the background of your device. Split harnesses your devices extra computing power to power ML developers.
            </p>
          </div>
        </div>

        <div className="info-block" ref={ref2}>
          <div className="info-text">
            <h2 className="info-title">Save Money</h2>
            <p className="info-description">
              Split gives enterprises and individuals powerful and cost effective access to inference, model training, and more. 
            </p>
          </div>
          <motion.div
            className="info-image-container"
            initial={{ opacity: 0, x: 100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <img src={thirdImage} className="info-image" alt="Save Money" />
          </motion.div>
        </div>
      </section>

      <section className="engineers-section">
        <h2         className="title"
        >Built by Engineers From</h2>
        <div className="company-logos">
          <motion.span className="company-logo" whileHover={{ scale: 1.1 }}>Google</motion.span>
          <motion.span className="company-logo" whileHover={{ scale: 1.1 }}>Disney</motion.span>
          <motion.span className="company-logo" whileHover={{ scale: 1.1 }}>Reddit</motion.span>
        </div>
      </section>
      <section className="faq-section">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-list">
          <FAQItem 
            question="What type of GPUs are on split?" 
            answer="Answer about GPU types on split..."
          />
          <FAQItem 
            question="How safe is split?" 
            answer="Split retains no personal or identifying data and adheres to industry security standards"
          />
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title">Don't Miss Out</h2>
        <JoinWaitlistButton /> 
      </section>
    </div>

    
  );
};

export default PageComponent;