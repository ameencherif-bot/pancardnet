import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
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
              <h1 className="hero-title">Master PAN Card Resizing & Document Management</h1>
              <p className="hero-subtitle">
                Your comprehensive resource for PAN card resizing, document optimization, and digital file management. 
                Learn professional techniques and best practices from industry experts. Whether you're preparing documents for official submissions or managing digital files, we've got you covered with practical guides, step-by-step tutorials, and expert insights.
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
                <Image src="/blog1.png" alt="PAN Card Resizer Tool" fluid />
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
                    Comprehensive, step-by-step guides on resizing PAN cards and other important documents with professional techniques that ensure quality preservation.
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
                    Learn about official standards, compliance requirements, and best practices for document preparation and optimization that meet regulatory requirements.
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
                    Access our free tools and resources to help you manage and resize your documents easily without any hidden costs or subscriptions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg={10} className="mx-auto">
              <h3>Understanding PAN Cards in India</h3>
              <p>
                The Permanent Account Number (PAN) is a critical identification document in India, issued by the Indian Income Tax Department. Whether you're filing taxes, opening a bank account, or conducting business transactions, having a properly formatted and readily accessible PAN card is essential. At our platform, we provide up-to-date, authoritative information on PAN cards, including how to apply, update details, verify your PAN, and prepare scanned images for official submissions.
              </p>
              <p>
                One of the most common challenges people face is preparing their PAN card documents for digital submission. Many online platforms and financial institutions require specific file sizes and formats. If your scanned PAN card image is too large, it may be rejected by submission systems. This is where professional resizing comes in. Our content targets key search queries like <strong>"PAN card information"</strong>, <strong>"apply for PAN"</strong>, <strong>"PAN verification"</strong>, <strong>"PAN card size"</strong>, and <strong>"how to resize PAN card"</strong> to help you find the answers you need quickly.
              </p>
              <p>
                We understand that navigating bureaucratic requirements can be overwhelming. That's why we've created a resource hub dedicated to simplifying the process. Our team has researched official guidelines and tested practical solutions to bring you the most relevant and actionable advice. Whether you're a first-time PAN holder or someone who needs to update their information, our guides cover every aspect of the process with clarity and precision.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Detailed Content Section */}
      <section className="content-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12}>
              <h2 className="section-title mb-4">Why Proper PAN Card Management Matters</h2>
              <p className="lead">
                In today's digital-first world, the way you manage and present your documents can make or break your applications and transactions. A poorly formatted or oversized PAN card image can lead to rejected submissions, delayed processing, and unnecessary frustration. Understanding the correct specifications and having access to proper tools can save you hours of time and prevent costly mistakes.
              </p>
              <p>
                Many people are unaware of the specific requirements that different institutions have for PAN card uploads. Banks, stock brokers, insurance companies, and government portals each have their own standards. Some might accept PDF files, while others require JPG or PNG. Some have strict size limitations, while others focus on resolution quality. Without proper guidance, you might end up spending multiple attempts trying to get your submission accepted.
              </p>
              <p>
                Our platform consolidates all this information in one place. We break down the technical jargon into simple, actionable steps that anyone can follow. Our guides aren't just theoretical—they're based on real-world experience and feedback from thousands of users who've successfully navigated these processes. We focus on the practical "how-to" aspects that matter most to you. Whether you're new to PAN management or looking to refine your approach, <Link to="/">our homepage resource hub</Link> is designed to meet you where you are.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3>The Challenge of Document Resizing</h3>
              <p>
                When you scan your PAN card on a standard scanner or high-end smartphone camera, the resulting image file can be quite large—often several megabytes in size. While this is great for image quality, it becomes problematic when you need to upload it to online portals that have file size restrictions, typically ranging from 100KB to 2MB.
              </p>
              <p>
                The challenge isn't just about making the file smaller. You also need to preserve image quality so that all the crucial details—your name, PAN number, date of birth, and photo—remain clearly visible and readable. Generic compression tools often degrade image quality to the point where text becomes blurry or illegible, which defeats the purpose.
              </p>
              <p>
                This is where specialized knowledge and tools become invaluable. Our guides teach you the optimal balance between file size reduction and quality preservation. We explain concepts like DPI (dots per inch), compression ratios, and color depth in simple terms, enabling you to make informed decisions about how to handle your documents.
              </p>
            </Col>
            <Col lg={6}>
              <h3>Our Solution-Oriented Approach</h3>
              <p>
                Rather than just identifying problems, we provide tested solutions. Our website features comprehensive guides on document resizing, explaining multiple methods ranging from simple online tools to advanced techniques for those comfortable with technical details. Our guides teach you practical methods to handle your documents effectively.
              </p>
              <p>
                Each guide is structured to serve different skill levels. Beginners can follow our step-by-step walkthroughs that require no technical knowledge. More experienced users can dive deeper into the technical specifications and optimization techniques. We also provide troubleshooting advice for common issues that people encounter during the process. Return to <Link to="/">our main page</Link> anytime to explore more resources or start fresh.
              </p>
              <p>
                What sets our platform apart is our commitment to accuracy and timeliness. PAN card requirements and submission standards occasionally change, and we stay on top of these updates. You won't find outdated information here—everything is regularly reviewed and updated to reflect current guidelines and best practices.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={12}>
              <h3>Key Topics We Cover</h3>
              <p>
                Our resource library spans several critical areas related to PAN cards and document management. Here's what you can expect to find:
              </p>
              <ul className="content-list">
                <li><strong>PAN Card Basics:</strong> Understanding what a PAN card is, who needs one, and why it's important in India's financial and tax ecosystem.</li>
                <li><strong>Applying for a PAN:</strong> Step-by-step instructions for first-time applicants, including required documents, application process, and expected timelines.</li>
                <li><strong>PAN Updates and Corrections:</strong> How to update your information if your name, address, or other details have changed, and how to correct errors.</li>
                <li><strong>PAN Verification:</strong> Methods to verify your PAN online and understand what the verification process entails.</li>
                <li><strong>Document Resizing:</strong> Technical guides on resizing PAN card images and other documents for online submission, including optimal file sizes and formats.</li>
                <li><strong>Format Requirements:</strong> Understanding different file formats (JPG, PNG, PDF) and when to use each one for different purposes.</li>
                <li><strong>Quality Preservation:</strong> Techniques to maintain image quality while reducing file size, ensuring readability and acceptability.</li>
                <li><strong>Common Issues:</strong> Troubleshooting advice for problems like rejected uploads, file size errors, and quality concerns.</li>
              </ul>
              <p>
                Each topic has been carefully researched and compiled with input from tax professionals, document management experts, and real users like you. We believe that the more informed you are about PAN card requirements and document handling best practices, the smoother your entire process becomes. <Link to="/">Head back to our main resource center</Link> to browse all these topics in detail.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <h3>Getting Started with PAN Card Management</h3>
              <p>
                Starting your journey toward proper PAN card management is simple. Browse our extensive collection of guides and pick the topic most relevant to your current need. Whether you need information about document resizing or verification, use our search functionality or browse through our featured articles below.
              </p>
              <p>
                Our resources are completely free and designed with your convenience in mind. Whether you're accessing this from a smartphone, tablet, or computer, the content is formatted for easy reading and quick reference. We believe that helpful information should be accessible to everyone, regardless of their technical expertise or internet connection speed.
              </p>
              <p>
                We're continuously expanding our resource library based on user feedback and emerging needs. If there's a topic you'd like us to cover or a question you think our guides should address, we'd love to hear from you. Your feedback helps us create even better resources for the community.
              </p>
              <p>
                Take the first step toward stress-free document management. Explore our guides, familiarize yourself with best practices, and bookmark this site for future reference. Let's make document management simple, efficient, and accessible for everyone.
              </p>
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col lg={12}>
              <h3>PAN Card in the Digital Age</h3>
              <p>
                The digital transformation of India's financial and administrative systems has made PAN cards more important than ever. From opening a bank account online to trading on the stock market, from filing tax returns digitally to getting a loan from fintech companies, your PAN is often the first thing requested. This digital-first approach also means that the quality and format of your digital PAN card documentation matter significantly.
              </p>
              <p>
                Many institutions now prefer digital submissions and have moved away from accepting physical documents entirely. This shift has created a new set of challenges for individuals who aren't familiar with digital document standards. Questions like "What file size should my PAN card be?" or "Why is my PDF being rejected?" have become common. Our comprehensive guides address these exact pain points with practical solutions.
              </p>
              <p>
                We've also noticed that many people struggle with the difference between simply uploading a document and uploading one that meets specific technical requirements. A file might open fine on your computer but fail to upload because it exceeds size limits or doesn't meet format specifications. Understanding these nuances is crucial for successful submissions. Return to <Link to="/">our complete resource guide</Link> to explore all the technical details that can make your submissions successful on the first try.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3>Common Mistakes and How to Avoid Them</h3>
              <p>
                Over the years, we've documented the most common mistakes people make when handling PAN card documents. Understanding these pitfalls can save you time and frustration. One of the most frequent errors is uploading a file that's too large. People often scan their PAN cards at high resolution for clarity, not realizing that many online systems have size restrictions.
              </p>
              <p>
                Another common mistake is using the wrong file format. Some systems specifically require PNG or JPG and will reject PDF files, while others prefer PDFs. Without clear guidance, you're essentially guessing. We've also seen people crop their PAN card improperly, cutting off essential information or parts of the text, leading to rejection. These mistakes accumulate, turning what should be a quick process into a frustrating ordeal.
              </p>
              <p>
                Additionally, many people don't understand color modes and compression. Saving an image in grayscale instead of color can make it harder to read, and aggressive compression can blur text to illegibility. We provide step-by-step instructions on how to avoid each of these mistakes, ensuring your documents are always in optimal condition.
              </p>
            </Col>
            <Col lg={6}>
              <h3>Best Practices for Document Archiving</h3>
              <p>
                Beyond just resizing and submitting your PAN card, it's important to maintain a proper archiving system for your important documents. Having well-organized, properly formatted copies of your PAN card and other identification documents can save you time in future transactions. We recommend maintaining both a high-quality original scan for archival purposes and optimized versions for submission.
              </p>
              <p>
                Create a secure folder on your computer or cloud storage where you keep your documents. Use clear naming conventions—for example, "PAN_FirstName_LastName_HighRes" for archives and "PAN_FirstName_LastName_Web" for submission versions. This organization system ensures you can quickly locate the right version when needed without having to re-scan or re-process your documents each time.
              </p>
              <p>
                Consider using encryption or password protection for sensitive files. Modern file systems and cloud services offer these features to keep your documents safe. Regular backups are also essential—storing copies in multiple locations ensures you won't lose critical documents due to hardware failure or accidental deletion. Our guides provide detailed recommendations for setting up these systems properly.
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

    </div>
  );
}

export default Home;
