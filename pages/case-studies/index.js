// pages/case-studies/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/caseStudies';

const fadeInFast = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CaseStudiesPage = () => {
  return (
    <>
      <Head>
        <title>Case Studies – Appropriate Tech Solutions</title>
        <meta
          name="description"
          content="Real-world examples of Appropriate Tech Solutions driving digital transformation for clients through no-code and automation."
        />
      </Head>
      <motion.section
        className="container case-studies-page"
        initial="hidden"
        animate="visible"
        variants={fadeInFast}
        transition={{ duration: 0.2 }}
      >
        <h1>Case Studies</h1>
        <p>
          See how we've helped clients with our no-code development, automation, and AI solutions:
        </p>
        <div className="case-studies-list">
          {caseStudies.map(caseItem => (
            <article key={caseItem.slug} className="case-item">
              <h2>{caseItem.title}</h2>
              <p>{caseItem.summary}</p>
              <Link href={`/case-studies/${caseItem.slug}`} className="read-more">
                Read More &rarr;
              </Link>
            </article>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default CaseStudiesPage;
