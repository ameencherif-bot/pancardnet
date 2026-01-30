import React, { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  useEffect(() => {
    document.title = 'Contact — PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Get in touch with the PAN Card Central team for feedback, feature requests or partnerships.';
  }, []);

  return (
    <Container className="py-5" style={{maxWidth:720}}>
      <h1>Contact Us</h1>
      <p>We welcome feedback, feature requests, and questions. Fill the form below or email us directly at <a href="mailto:hello@pancardcentral.example">hello@pancardcentral.example</a>.</p>

      <Form>
        <Form.Group className="mb-3" controlId="cName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Your full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="you@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="How can we help?" />
        </Form.Group>
        <Button variant="primary" type="submit">Send message</Button>
      </Form>

      <p className="mt-4 text-muted">Note: This form is a convenience. For urgent matters please email us directly.</p>
    </Container>
  );
}

export default Contact;
