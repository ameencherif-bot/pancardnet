import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function About() {
  useEffect(() => {
    document.title = 'About — PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'PAN Card Central provides practical guides and lightweight tools (including the Pan Card Resizer) to help you prepare PAN documents for official submissions.';

    return () => {
      // optional cleanup handled by app
    };
  }, []);

  return (
    <Container className="py-5">
      <h1>About PAN Card Central</h1>
      <p>
        PAN Card Central was created to help people prepare and manage PAN card documents with clarity and confidence. We combine authoritative guides with simple, privacy-first tools such as the Pan Card Resizer so users can resize, crop, and download images in the correct formats and sizes required by UTI, NSDL, banks, and other portals.
      </p>

      <h3>Our mission</h3>
      <p>
        We aim to remove friction from common administrative tasks by providing clear instructions, practical examples, and fast, browser-based utilities that process files locally — no uploads, no hidden tracking, and no unnecessary complexity.
      </p>

      <h3>Team</h3>
      <p>
        Our content is researched by contributors with experience in document management and digital forms processing. We strive for accuracy and user-friendly explanations so even first-time applicants can follow along easily.
      </p>

      <p>
        If you'd like to collaborate, contribute feedback, or request a feature, please visit our <a href="/contact">Contact</a> page.
      </p>
    </Container>
  );
}

export default About;
