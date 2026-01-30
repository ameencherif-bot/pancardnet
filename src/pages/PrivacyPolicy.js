import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy — PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Privacy policy for PAN Card Central. We describe what data (if any) we collect and how we handle it.';
  }, []);

  return (
    <Container className="py-5">
      <h1>Privacy Policy</h1>
      <p>Last updated: January 30, 2026</p>

      <p>
        PAN Card Central values your privacy. We provide browser-based document tools that process files locally in your browser. We do not upload, store, or process your images on our servers unless explicitly stated. Files you create or download are stored on your device only when you choose to save them.
      </p>

      <h3>Data we collect</h3>
      <p>
        We collect minimal usage data for analytics and site performance when you opt in or when using third-party analytics scripts. Personal data is only collected if you contact us directly through the contact form or email—otherwise no personal identifiable information is required to use the resizer tool.
      </p>

      <h3>Cookies & third-party services</h3>
      <p>
        We use cookies for essential site functionality and may use third-party services for analytics and performance. If we integrate additional third-party services that collect personal data, we will disclose them here and provide opt-out instructions where possible.
      </p>

      <h3>Security</h3>
      <p>
        We follow reasonable security practices to protect the site and the data we process. Because the core tool performs processing in your browser, your images are not transmitted to our servers by default.
      </p>

      <h3>Contact</h3>
      <p>If you have questions about this policy, contact us at <a href="mailto:privacy@pancardcentral.example">privacy@pancardcentral.example</a>.</p>
    </Container>
  );
}

export default PrivacyPolicy;
