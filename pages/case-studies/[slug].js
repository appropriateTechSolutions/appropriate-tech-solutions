// pages/case-studies/[slug].js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { caseStudies } from '../../data/caseStudies';

// The CaseStudyPage component receives a single case study's data as props
const CaseStudyPage = ({ caseStudy }) => {
  if (!caseStudy) return <div>Case Study not found</div>; // Fallback for safety

  return (
    <>
      <Head>
        <title>{caseStudy.title} – Appropriate Tech Solutions Case Study</title>
        <meta name="description" content={caseStudy.summary} />
      </Head>
      <article className="case-study-detail">
        <h1>{caseStudy.title}</h1>
        {/* Render content paragraphs */}
        {caseStudy.content.map((paragraph, idx) => (
          <p key={idx}>
            <span dangerouslySetInnerHTML={{ __html: paragraph }} />
          </p>
        ))}
        <Link href="/case-studies" className="back-link">
          ← Back to Case Studies
        </Link>
      </article>
    </>
  );
};

export default CaseStudyPage;

// Generate paths for each case study slug
export async function getStaticPaths() {
  const paths = caseStudies.map(cs => ({
    params: { slug: cs.slug }
  }));
  return { paths, fallback: false };
}

// Fetch data for a case study based on slug
export async function getStaticProps({ params }) {
  const caseStudy = caseStudies.find(cs => cs.slug === params.slug) || null;
  return {
    props: { caseStudy }
  };
}
