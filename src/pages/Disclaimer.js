import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function Disclaimer() {
  useEffect(() => {
    document.title = 'Disclaimer — PAN Card Central';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Disclaimer for PAN Card Central: informational content only, not legal advice.';
  }, []);

  return (
    <Container className="py-5">
      <h1>Disclaimer</h1>
      <p>
        The information on PAN Card Central is for educational and informational purposes only. It is not professional, legal, or tax advice. Always consult the appropriate authority or a qualified professional for specific advice.
      </p>

      <h3>No guarantee</h3>
      <p>
        While we strive for accuracy, the site may contain errors or outdated information. We do not guarantee that the information will meet your specific needs; you should verify requirements with the issuing authority or service provider.
      </p>

      <h3>Ads and affiliate links</h3>
      <p>
        We may include third-party advertising or affiliate links. Clicking these links may redirect you to external sites; we do not control or endorse the content of external sites.
      </p>
    </Container>
  );
}

export default Disclaimer;
