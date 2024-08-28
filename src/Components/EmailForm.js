import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import 'src/styles/EmailForm.css'; // Import your component-specific CSS file

const EmailForm = () => {
  const [state, handleSubmit] = useForm("xqazknpj");

  if (state.succeeded) {
    return (
      <motion.div
        className="form-success"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>Thanks for joining!</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="email-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Your email address"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your company (if applicable)"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="submit-btn" // Apply your custom button style class
      >
        Submit
      </motion.button>
    </motion.form>
  );
};

export default EmailForm;