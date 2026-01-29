import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { DocumentSVG, ResizeSVG, CheckSVG } from '../components/SVGIcons';
import '../styles/Home.css';

// SEO meta and basic schema will be added when the Home component mounts

function Home() {
  useEffect(() => {
    document.title = 'PAN Card Central & Tools - Guides, Resizing and PAN Help';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Practical PAN card guides, resizing tips and lightweight tools to prepare your documents quickly and correctly.';

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": window.location.origin,
      "name": "PAN Card Central",
      "description": meta.content
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'home-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('home-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 className="hero-title">Master PAN Card Resizing</h1>
              <p className="hero-subtitle">
                Your comprehensive resource for PAN card resizing, document optimization, and digital file management. 
                Learn professional techniques and best practices from industry experts.
              </p>
              <a 
                href="https://pancardresizer.net/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="cta-button">
                  Try PAN Card Resizer Tool
                </Button>
              </a>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image">
                <DocumentSVG />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <h2 className="section-title">Our Resource Features</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <ResizeSVG />
                  </div>
                  <Card.Title>Detailed Guides</Card.Title>
                  <Card.Text>
                    Comprehensive, step-by-step guides on resizing PAN cards and other important documents with professional techniques.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <CheckSVG />
                  </div>
                  <Card.Title>Industry Standards</Card.Title>
                  <Card.Text>
                    Learn about official standards, compliance requirements, and best practices for document preparation and optimization.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <DocumentSVG />
                  </div>
                  <Card.Title>Free Resources</Card.Title>
                  <Card.Text>
                    Access our free tools and resources to help you manage and resize your documents easily.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={10} className="mx-auto">
              <h3>PAN Card Guides & Resources</h3>
              <p>
                We provide up-to-date, authoritative information on PAN cards, including how to apply, update details, verify your PAN, and prepare scanned images for official submissions. Our content targets key search queries like <strong>"PAN card information"</strong>, <strong>"apply for PAN"</strong>, <strong>"PAN verification"</strong>, and <strong>"PAN card size"</strong> to help you find the answers you need quickly.
              </p>
              <p>
                Browse our articles for practical tips and step-by-step guides; whether you need to resize scanned documents for upload or verify your PAN online, our resources simplify each step with best practices and recommended tools.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blog Preview Section */}
      <section className="blog-preview-section">
        <Container>
          <h2 className="section-title">Featured Articles</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Link to="/blog/resize-tips" className="blog-card-link">
                <Card className="blog-preview-card">
                  <Card.Body>
                    <h5>Professional Resize Tips</h5>
                    <p>Master the art of resizing PAN cards with our comprehensive guide covering all essential techniques and tools.</p>
                    <span className="read-more">Read More →</span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6} lg={4}>
              <Link to="/blog/document-guide" className="blog-card-link">
                <Card className="blog-preview-card">
                  <Card.Body>
                    <h5>Document Size Guide</h5>
                    <p>Understand document dimensions, file sizes, and format requirements for PAN cards and other identification documents.</p>
                    <span className="read-more">Read More →</span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6} lg={4}>
              <Link to="/blog/best-practices" className="blog-card-link">
                <Card className="blog-preview-card">
                  <Card.Body>
                    <h5>Best Practices Guide</h5>
                    <p>Learn the dos and don'ts of document management, including quality preservation and format optimization tips.</p>
                    <span className="read-more">Read More →</span>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Link to="/blogs" className="btn btn-primary">View All Blogs</Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2>Ready to Resize Your PAN Card?</h2>
              <p>
                Visit our main website for the professional PAN Card Resizer tool to optimize your documents instantly. 
                Fast, secure, and completely free!
              </p>
              <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="light" size="lg" className="cta-button-light">
                  Visit Main Website
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
