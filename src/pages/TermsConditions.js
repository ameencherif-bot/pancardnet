import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function TermsConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions — PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Terms and conditions for using PAN Card Central and its online tools.';
  }, []);

  return (
    <Container className="py-5">
      <h1>Terms & Conditions</h1>
      <p>These Terms and Conditions govern your use of the PAN Card Central website and tools. By accessing or using our site, you agree to these terms.</p>

      <h3>Use of site and tools</h3>
      <p>All tools are provided "as is" for your convenience. You are responsible for ensuring any files you create meet the requirements of the receiving portal.</p>

      <h3>Intellectual property</h3>
      <p>Site content, copy, and code are the property of PAN Card Central unless otherwise noted. You may not copy or redistribute content without permission.</p>

      <h3>Liability</h3>
      <p>We do our best to provide accurate content, but we are not liable for errors or for damages resulting from use of the site or tools. Use of the site is at your own risk.</p>

      <h3>Contact</h3>
      <p>Questions about these terms can be directed to <a href="mailto:legal@pancardcentral.example">legal@pancardcentral.example</a>.</p>
    </Container>
  );
}

export default TermsConditions;
