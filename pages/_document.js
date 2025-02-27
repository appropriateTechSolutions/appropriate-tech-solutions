// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* SEO: Character encoding */}
          <meta charSet="UTF-8" />
          {/* Responsive meta tag */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Google Fonts for Montserrat & Open Sans */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap" 
            rel="stylesheet" 
          />
          {/* Global SEO meta tags */}
          <meta name="description" content="Appropriate Tech Solutions – Digital transformation through no-code apps, automation, and AI." />
          <meta property="og:site_name" content="Appropriate Tech Solutions" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Appropriate Tech Solutions" />
          <meta property="og:description" content="Expert no-code development, workflow automation, and AI solutions to streamline your business." />
          {/* Placeholder for default OG image */}
          {/* <meta property="og:image" content="https://your-deployment-url.com/og-image.jpg" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
