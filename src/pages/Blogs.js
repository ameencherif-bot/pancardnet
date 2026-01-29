import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs';
import '../styles/Blog.css';

function Blogs() {
  useEffect(() => {
    document.title = 'Articles - PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Practical articles on PAN cards: resizing, document prep, and quick tips for successful submissions.';

    // Basic JSON-LD for collections
    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "PAN Card Central Articles",
      "description": "Collection of practical articles about PAN card resizing, document prep and best practices.",
      "url": window.location.href
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blogs-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('blogs-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="blogs-list">
      <Container>
        <h1 className="section-title">Latest Articles</h1>
        <Row className="g-4">
          {blogs.map((post) => (
            <Col md={6} lg={4} key={post.id}>
              <Card className="h-100 blog-card">
                <img src={post.image} loading="lazy" className="card-img-top" alt={post.title} />
                <Card.Body className="d-flex flex-column">
                  <small className="text-muted mb-1">{post.category} • {post.date}</small>
                  <Card.Title><Link to={post.slug} className="blog-title-link">{post.title}</Link></Card.Title>
                  <Card.Text className="text-muted">{post.excerpt}</Card.Text>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <Link to={post.slug} className="btn btn-outline-primary">Read More</Link>
                    <small className="text-muted">Read &middot; {post.date}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;