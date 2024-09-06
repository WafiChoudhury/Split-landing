import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/App.css';
import secondImage from '../computer.png';
import thirdImage from '../editor.png';
import JoinWaitlistButton from './JoinWaitlistButton';

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
        className="wafi"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SplitAI
      </motion.h1>
      
     <div className="title">
        <span style={{ display: 'block', marginBottom: '0px' }}>
          Monetize your GPU &
        </span>
        <span style={{ display: 'block' }}>
          Power ML Developers
        </span>
        </div>

      <div className="subheading1">
        The world's first distributed cloud GPU marketplace for ML workloads
      </div>
      <div className='first-wrapper'></div>

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
            <img src={secondImage} className="info-image" alt="Make Money" width={400} height={400} />
          </motion.div>
          <div className="info-text">
              <h2 className="info-title">Contribute your GPU & <br></br>Start Earning Today</h2>
            <p className="info-description">
              Get paid by the hour while Split runs quietly in the background of your device. Split harnesses your devices extra computing power to power ML developers.
            </p>
          </div>
        </div>

        <div className="info-block" ref={ref2}>
          <div className="info-text">
            <h2 className="info-title">Access Cloud Computing Power for Cheap</h2>

            <p className="info-description">
              Developers can now access computing resources for inference, training, & fine tuning for cheaper than ever before! 
            </p>
          </div>
          <motion.div
            className="info-image-container"
            initial={{ opacity: 0, x: 100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <img src={thirdImage} className="info-image" alt="Save Money" raidus={100}/>
          </motion.div>
        </div>
      </section>

      <section className="engineers-section">
        <h2 className="title">Built by Engineers From</h2>
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
            answer="Split utilizes a distributed network of devices that contribute their idle compute power" 
          />
          <FAQItem 
            question="How safe is split?" 
            answer="Split retains no personal or identifying data and adheres to industry security standards"
          />
           <FAQItem 
            question="What kind of models are supported on Split?" 
            answer="We support public and custom models such as OpenLLaMA, OpenLM, Mistral and more"
          />
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
