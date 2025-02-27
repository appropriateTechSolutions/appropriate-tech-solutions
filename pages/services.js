// pages/services.js
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
      <Head>
        <title>Services – Appropriate Tech Solutions</title>
        <meta
          name="description"
          content="Explore the services offered by Appropriate Tech Solutions: AppSheet development, workflow automation, AI integration, and IT consulting."
        />
      </Head>
      <motion.section
        className="container"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1>Our Services</h1>
        <div className="service">
          <h2>AppSheet Development</h2>
          <p>
            We build custom applications on <strong>Google AppSheet</strong> to digitize your
            workflows without writing code. Our team designs user-friendly apps for tasks like
            inventory management, CRM, field data collection, and more. You get rapid development and
            deployment, with the full power of Google’s secure cloud.
          </p>
        </div>
        <div className="service">
          <h2>Workflow Automation</h2>
          <p>
            Manual, repetitive tasks slow your business down. We implement automation using tools
            like <strong>Zapier, Power Automate</strong>, and custom scripts to connect your systems
            and automate workflows. The result is reduced errors, lower costs, and more time for
            your team to focus on high-value work.
          </p>
        </div>
        <div className="service">
          <h2>AI &amp; ML Solutions</h2>
          <p>
            Leverage the power of artificial intelligence. From AI-driven chatbots that provide 24/7
            customer support to machine learning models that uncover insights in your data, we
            integrate <strong>AI solutions</strong> tailored to your needs.
          </p>
        </div>
        <div className="service">
          <h2>Consulting &amp; Training</h2>
          <p>
            Digital transformation is more than just tools—it’s also people and process. We offer
            consulting services to map out a technology roadmap, and training sessions to upskill
            your team in no-code platforms and automation best practices.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default Services;
