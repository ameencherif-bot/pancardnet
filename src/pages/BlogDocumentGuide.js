import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { DocumentSVG } from '../components/SVGIcons';
import '../styles/Blog.css';

// SEO meta & schema for this article

function BlogDocumentGuide() {
  useEffect(() => {
    document.title = 'Complete Document Size Guide for PAN Cards - PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'PAN card dimensions, DPI and file format guidance for both official submissions and web display.';

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Complete Document Size Guide for PAN Cards",
      "description": meta.content,
      "image": window.location.origin + '/blog2.png',
      "author": { "@type": "Person", "name": "PAN Card Central" },
      "datePublished": "2024-01-20",
      "keywords": "PAN card size, PAN DPI, PAN document dimensions"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'doc-guide-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('doc-guide-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <article className="blog-post">
      <div className="blog-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1>Complete Document Size Guide for PAN Cards</h1>
              <p className="blog-meta">Published on January 20, 2024 | 6 min read</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="blog-content">
              <div className="blog-image-container text-center mb-4">
                <DocumentSVG />
              </div>

              <h2>Understanding Document Sizes and Specifications</h2>
              <p>
                Proper document sizing is essential for both digital and physical submissions. This comprehensive guide 
                covers everything you need to know about PAN card dimensions, file sizes, and technical specifications 
                to ensure your documents meet official requirements.
              </p>

              <h3>PAN Card Physical Dimensions</h3>
              <p>
                The Permanent Account Number (PAN) card issued by the Indian Income Tax Department follows 
                standardized dimensions for consistency and security:
              </p>
              <ul>
                <li><strong>Length:</strong> 85.6 mm (3.37 inches)</li>
                <li><strong>Width:</strong> 53.98 mm (2.125 inches)</li>
                <li><strong>Thickness:</strong> 0.76 mm (credit card standard)</li>
                <li><strong>Aspect Ratio:</strong> 1.59:1 (landscape orientation)</li>
              </ul>

              <h3>Digital File Specifications</h3>
              <h4>For Official Submissions</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Resolution (DPI)</td>
                    <td>300 DPI (minimum)</td>
                  </tr>
                  <tr>
                    <td>Color Mode</td>
                    <td>RGB or CMYK</td>
                  </tr>
                  <tr>
                    <td>File Format</td>
                    <td>JPG, PNG, or PDF</td>
                  </tr>
                  <tr>
                    <td>File Size</td>
                    <td>100 KB - 2 MB</td>
                  </tr>
                  <tr>
                    <td>Pixel Dimensions</td>
                    <td>1015 × 642 pixels (at 300 DPI)</td>
                  </tr>
                </tbody>
              </table>

              <h4>For Web Display</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Resolution (DPI)</td>
                    <td>72 DPI</td>
                  </tr>
                  <tr>
                    <td>Color Mode</td>
                    <td>RGB</td>
                  </tr>
                  <tr>
                    <td>File Format</td>
                    <td>JPG, PNG, or WebP</td>
                  </tr>
                  <tr>
                    <td>File Size</td>
                    <td>20 KB - 500 KB</td>
                  </tr>
                  <tr>
                    <td>Pixel Dimensions</td>
                    <td>450 × 284 pixels (typical)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Comparison with Other ID Documents</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Dimensions (mm)</th>
                    <th>Aspect Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PAN Card</td>
                    <td>85.6 × 53.98</td>
                    <td>1.59:1</td>
                  </tr>
                  <tr>
                    <td>Credit Card</td>
                    <td>85.6 × 53.98</td>
                    <td>1.59:1</td>
                  </tr>
                  <tr>
                    <td>Aadhar Card</td>
                    <td>86 × 54</td>
                    <td>1.59:1</td>
                  </tr>
                  <tr>
                    <td>Driver's License (India)</td>
                    <td>100 × 65</td>
                    <td>1.54:1</td>
                  </tr>
                </tbody>
              </table>

              <h3>Color Mode Specifications</h3>
              <ul>
                <li><strong>RGB:</strong> For digital display and web use (3 channels: Red, Green, Blue)</li>
                <li><strong>CMYK:</strong> For printing purposes (4 channels: Cyan, Magenta, Yellow, Black)</li>
                <li><strong>Grayscale:</strong> Acceptable for text-only documents</li>
              </ul>

              <h3>File Format Recommendations</h3>
              <ul>
                <li><strong>JPG:</strong> Best for photographs and colored documents, good compression</li>
                <li><strong>PNG:</strong> Lossless format, preserves all details, larger file size</li>
                <li><strong>PDF:</strong> Universal format, maintains layout across devices</li>
              </ul>

              <h3>Calculating Pixel Dimensions</h3>
              <p>
                To convert physical dimensions to pixel dimensions:
                <br />
                <strong>Pixels = (Dimensions in mm × DPI) / 25.4</strong>
              </p>
              <p>Example for 300 DPI:</p>
              <ul>
                <li>Length: (85.6 mm × 300) / 25.4 = 1,010 pixels</li>
                <li>Width: (53.98 mm × 300) / 25.4 = 637 pixels</li>
              </ul>

              <h3>Best Practices for File Compression</h3>
              <ol>
                <li>Use appropriate compression ratio for your use case</li>
                <li>Always maintain readability of text and numbers</li>
                <li>Test compressed files before final submission</li>
                <li>Keep original uncompressed backup</li>
                <li>Use quality presets (80-85% for JPG)</li>
              </ol>

              <div className="blog-cta">
                <h4>Need Help Resizing Your Documents?</h4>
                <p>
                  Visit our main website where the PAN Card Resizer tool automatically handles all these specifications, 
                  making it easy to get perfect results every time.
                </p>
                <a 
                  href="https://pancard-ag91.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg">
                    Visit Main Website
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default BlogDocumentGuide;
