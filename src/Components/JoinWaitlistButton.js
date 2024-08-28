import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm'; // Import your EmailForm component here

const JoinWaitlistButton = () => {
  const [showForm, setShowForm] = useState(false); // State to manage form display

  // Function to handle click and show form
  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {/* Button to trigger form display */}
      {!showForm && (
        <motion.button
          className="get-started-btn"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={handleClick} // Show form on button click
        >
          Join the waitlist
        </motion.button>
      )}

      {/* Display form after clicking "Join the waitlist" */}
      {showForm && <EmailForm />}
    </>
  );
};

export default JoinWaitlistButton;