// pages/about.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us – Appropriate Tech Solutions</title>
        <meta
          name="description"
          content="Learn about Appropriate Tech Solutions - our mission, values, and what makes us a leader in no-code digital transformation."
        />
      </Head>
      <motion.section
        className="container"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1>About Appropriate Tech Solutions</h1>
        <p>
          Founded in 2020, Appropriate Tech Solutions is dedicated to empowering businesses through
          technology. Our mission is to drive digital transformation by leveraging{' '}
          <strong>no-code platforms</strong>, automation, and AI in ways that are accessible and
          impactful.
        </p>
        <p>
          We believe in a customer-centric approach: understanding your unique processes and
          challenges before crafting tailored solutions. Our team brings together experienced
          developers, business analysts, and AI specialists who share a passion for innovation and
          teaching others.
        </p>
        <h2>Our Mission &amp; Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> We embrace the latest no-code and AI tools to deliver
            creative solutions.
          </li>
          <li>
            <strong>Simplicity:</strong> Technology should simplify work. We prioritize user-friendly
            solutions that anyone can use.
          </li>
          <li>
            <strong>Transparency:</strong> Clear communication and collaboration are at the heart of
            our process.
          </li>
          <li>
            <strong>Impact:</strong> We focus on high-impact solutions that drive efficiency and
            growth for our clients.
          </li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          Unlike traditional consultancies, we specialize in rapid development through no-code and
          low-code platforms. This means faster turnaround, lower costs, and solutions that you can
          easily maintain. We partner with industry leaders like Google (AppSheet) and Zapier, and we
          constantly explore emerging tech (such as AI and machine learning) to keep our clients
          ahead of the curve.
        </p>
      </motion.section>
    </>
  );
};

export default About;
