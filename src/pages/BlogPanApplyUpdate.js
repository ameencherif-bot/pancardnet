import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Blog.css';

function BlogPanApplyUpdate() {
  useEffect(() => {
    document.title = 'How to Apply and Update Your PAN Card — PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Step-by-step guidance to apply and update PAN details, plus tips and document checks for fast processing.';

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "How to Apply and Update Your PAN Card — Step-by-Step",
      "description": "A practical, up-to-date guide to apply for a new PAN, update details, common mistakes to avoid and documents required for fast processing.",
      "image": window.location.origin + '/blog2.png',
      "author": {
        "@type": "Person",
        "name": "PAN Card Central"
      },
      "datePublished": "2026-01-30",
      "keywords": "apply for PAN, update PAN, PAN application, PAN correction"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blog2-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('blog2-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <article className="blog-post">
      <div className="blog-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1>How to Apply and Update Your PAN Card — Step-by-Step</h1>
              <p className="blog-meta">Published on January 30, 2026 | 8 min read</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="blog-content">
              <div className="blog-image-container text-center mb-4">
                <img src="/blog2.png" loading="lazy" alt="Apply PAN" className="img-fluid rounded"/>
              </div>

              <h2>Applying for a New PAN</h2>
              <p>
                Follow official forms and submit the right identity and address documents. Use the government portal or authorized facilitators for the application process.
              </p>

              <h3>Documents Required</h3>
              <ul>
                <li>Proof of Identity (Aadhaar, Passport, Voter ID)</li>
                <li>Proof of Address (Utility bill, Bank statement)</li>
                <li>Passport size photograph</li>
              </ul>

              <h3>Updating PAN Details</h3>
              <p>
                For corrections or updates (name, address), fill the correction form and submit supporting documents. Ensure the scanned images match the required specifications to avoid rejection.
              </p>

              <h3>Tips to Avoid Delays</h3>
              <ul>
                <li>Verify scanned copies for clarity and readability</li>
                <li>Compress images without losing essential details</li>
                <li>Keep originals handy for verification</li>
                <li>Track application status using the official reference number</li>
              </ul>

              <h3>Optimized Keywords (for guidance):</h3>
              <p><strong>Primary:</strong> apply for PAN, PAN correction, update PAN</p>
              <p><strong>Secondary:</strong> PAN application process, PAN documents required</p>

              <div className="blog-cta">
                <h4>Need help preparing documents?</h4>
                <p>
                  Use our PAN Card Resizer tool to get images and documents ready for submission—optimized to official requirements.
                </p>
                <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">Visit Main Website</Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default BlogPanApplyUpdate;