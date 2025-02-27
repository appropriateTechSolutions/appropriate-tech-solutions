// pages/contact.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us – Appropriate Tech Solutions</title>
        <meta
          name="description"
          content="Get in touch with Appropriate Tech Solutions for no-code development, automation, and digital transformation consulting."
        />
      </Head>
      <motion.section
        className="container"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1>Contact Us</h1>
        <p>
          Ready to start your digital transformation or have a question? Send us a message and we'll
          respond promptly.
        </p>
        <form
          action="https://formspree.io/f/your-form-id" /* replace with your actual Formspree endpoint */
          method="POST"
          className="contact-form"
        >
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Your email" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="How can we help?" />
          </div>
          {/* Formspree honeypot field for spam prevention (optional) */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
