import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <h5>About PAN Card Central</h5>
            <p>
              Practical guides and tools to prepare PAN documents and handle digital submissions confidently.
              Concise how-tos, tips and lightweight tools so you can finish tasks faster.
            </p>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginTop: '1rem' }}>
              <strong>Reference:</strong> External resources at <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-backlink">main website</a>.
            </p>
          </Col>
          <Col md={6}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Main Website
                </a>
              </li>
              <li>
                <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer">
                  PAN Card Resizer Tool
                </a>
              </li>
              <li>
                <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Online Tools
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="border-top border-secondary mt-4 pt-4">
          <Col className="text-center">
            <p className="mb-0">
              &copy; 2026 PAN Card Central. <a href="https://pancard-ag91.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-backlink">Visit Main Website</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
