// pages/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';

const fadeInUpFast = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const Home = ({ posts }) => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeInUpFast}
        transition={{ duration: 0.3 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Smart Tech Solutions for Growing Businesses</h1>
          <p>
            Custom software, automation, and web development to streamline your operations.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn primary-btn">
              Get a Free Consultation
            </Link>
            <Link href="/case-studies" className="btn secondary-btn">
              See Our Work
            </Link>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        className="about-us container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <h2>Who We Are</h2>
        <p>
          Appropriate Tech Solutions brings together experienced developers and business
          strategists with a passion for innovation. We combine cutting-edge technology with
          a customer-centric approach to deliver tailored digital transformation solutions.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services-overview container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <h2>What We Offer</h2>
        <p className="subheading">
          We build powerful, customized solutions to simplify your business operations.
        </p>
        <div className="services-list">
          {[
            {
              title: "AppSheet Development",
              description: "Low-code apps to streamline processes."
            },
            {
              title: "Business Automations",
              description: "Automated workflows that save you time."
            },
            {
              title: "Custom Software Development",
              description: "Tailored apps and software for your unique needs."
            },
            {
              title: "Website Development",
              description: "Modern, high-performance websites."
            },
            {
              title: "Other Automations",
              description: "CRM integrations, data processing, and more."
            }
          ].map((service, idx) => (
            <motion.div
              className="service-card"
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: '0px 4px 12px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.2 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
        <Link href="/services" className="btn tertiary-btn">
          Let's Discuss Your Project
        </Link>
      </motion.section>

      {/* Portfolio/Our Work Section */}
      <motion.section
        className="portfolio container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <h2>Our Projects</h2>
        <div className="case-list">
          {/* Sample case studies – ideally loaded dynamically */}
          <article className="case-summary">
            <h3>No-Code CRM for RetailCo</h3>
            <p>
              Streamlined customer management with an AppSheet CRM, eliminating manual spreadsheets.
            </p>
          </article>
          <article className="case-summary">
            <h3>Workflow Automation for FinTech Inc.</h3>
            <p>
              Automated loan processing tasks, reducing turnaround time by 50%.
            </p>
          </article>
          <article className="case-summary">
            <h3>AI Chatbot for SupportCo</h3>
            <p>
              Deployed an AI-powered chatbot handling 70% of inquiries, boosting support efficiency.
            </p>
          </article>
        </div>
        <Link href="/case-studies" className="btn tertiary-btn">
          View More Projects
        </Link>
      </motion.section>

      {/* Clients & Testimonials Section */}
      <motion.section
        className="testimonials container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <h2>Who Trusts Us?</h2>
        <div className="testimonials-logos">
          {/* Replace these with actual logos in an animated slider if desired */}
          <img src="/client1.png" alt="Client 1" />
          <img src="/client2.png" alt="Client 2" />
          <img src="/client3.png" alt="Client 3" />
        </div>
        <div className="testimonials-quotes">
          <blockquote>
            “Their automation solutions transformed our operations – a game changer for our business.”
            <cite>– Jane D., Operations Manager at RetailCo</cite>
          </blockquote>
          <blockquote>
            “The blend of tech expertise and strategic insight made all the difference.”
            <cite>– John S., CEO of FinTech Inc.</cite>
          </blockquote>
        </div>
        <Link href="/contact" className="btn tertiary-btn">
          Join Our Clients
        </Link>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        className="cta-banner container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <h2>Let's Talk!</h2>
        <p>Ready to accelerate your digital transformation? Get in touch and let's build something great together.</p>
        <Link href="/contact" className="btn">
          Send Message
        </Link>
      </motion.section>
    </>
  );
};

// Fetch latest blog posts at build time for the homepage (if desired)
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.md$/, '');
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt
    };
  });
  
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestPosts = posts.slice(0, 2);
  
  return {
    props: { posts: latestPosts }
  };
}

export default Home;
