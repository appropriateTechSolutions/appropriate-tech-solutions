// pages/blog/[slug].js
import React from 'react';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BlogPost = ({ postData }) => {
  if (!postData) return <div>Post not found.</div>;

  return (
    <>
      <Head>
        <title>{postData.title} – Appropriate Tech Blog</title>
        <meta name="description" content={postData.excerpt || postData.title} />
        <meta property="og:title" content={postData.title + " – Appropriate Tech Solutions Blog"} />
        <meta property="og:description" content={postData.excerpt} />
      </Head>
      <article className="blog-post">
        <h1>{postData.title}</h1>
        <p className="post-meta">{postData.date}</p>
        {/* Render markdown content as HTML */}
        <div className="post-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') }
  }));
  return {
    paths,
    fallback: false  // all blog slugs are pre-rendered; no fallback
  };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  const fileContents = fs.readFileSync(postFilePath, 'utf8');

  // Parse front matter and content from markdown
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown content to HTML string
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        slug: params.slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        contentHtml
      }
    }
  };
}
