// pages/blog/index.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog – Appropriate Tech Solutions</title>
        <meta name="description" content="Insights on no-code development, business automation, and AI from Appropriate Tech Solutions." />
      </Head>
      <section className="blog-page">
        <h1>Blog</h1>
        {posts.map(post => (
          <article key={post.slug} className="post-item">
            <h2>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="post-meta">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="read-more">
              Read more &rarr;
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default Blog;

// Generate blog list at build time
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

  // Sort posts by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: { posts }
  };
}
