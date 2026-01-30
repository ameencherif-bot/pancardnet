import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function BlogNSDLvsUTIComparison() {
  useEffect(() => {
    document.title = 'NSDL vs UTI PAN Sizes — Which to Use & Why It Matters';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'An in-depth comparison of NSDL and UTI PAN upload requirements, size differences, and how to prepare images to match each portal.';

    // Article JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "NSDL vs UTI: Choosing the Right PAN Upload Profile",
      "description": meta.content,
      "author": { "@type": "Person", "name": "PAN Card Resizer" },
      "datePublished": "2026-01-30",
      "image": window.location.origin + '/hero-1200.webp'
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'blog-nsdl-uti-schema';
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);

    return () => { const el = document.getElementById('blog-nsdl-uti-schema'); if (el) el.remove(); };
  }, []);

  return (
    <Container className="py-5">
      <h1>NSDL vs UTI — PAN Card Upload Sizes and Practical Differences</h1>

      <p>
        When preparing PAN card images for upload, one confusing detail is that different portals and service providers sometimes expect different file sizes and formats. Two common authorities are NSDL and UTI, and while both serve related functions in India’s PAN ecosystem, their technical upload requirements can differ slightly. This article explains those differences and gives practical instructions for tailoring your images to each provider.
      </p>

      <h2>Why sizes vary</h2>
      <p>
        The primary reason sizes differ is historical: different systems were developed by different teams and may have been optimized for separate constraints such as legacy database fields, validation tools, or mobile-first considerations. NSDL and UTI each document recommended dimensions in their help pages; however, third-party portals (banks, brokers, etc.) may further constrain file sizes or formats.
      </p>

      <h3>Typical dimensions</h3>
      <p>
        While exact values can change, common practice is to provide square photographs for the card photo area (e.g., 213×213 px for some UTI specifications; 350×350 px is sometimes seen for NSDL or other providers). Signature areas often require wide rectangles (example 450×150 px), and document-type outputs—when requested—are delivered as PDFs that match pixel dimensions required by the receiving portal.
      </p>

      <h3>How to pick the right target</h3>
      <p>
        If you are certain which portal you’ll upload to, use that portal’s recommended dimensions. If you are unsure, use the Pan Card Resizer’s UTI preset for compact outputs (good for many common banks) or NSDL when the portal is known to accept larger images. When in doubt, create both sizes and test uploads—sometimes the smaller image will be accepted because it meets file-size rules.
      </p>

      <h2>Practical tips for compatibility</h2>
      <ul>
        <li><strong>Keep both variants:</strong> Maintain a high-resolution archive and save two optimized variants: one smaller (UTI-friendly) and one larger (NSDL/more permissive).</li>
        <li><strong>Always preview:</strong> Use the resizer preview at exact dimensions to ensure no cropping cuts essential numbers or the photo.</li>
        <li><strong>Use PDF for document uploads:</strong> If a portal asks for a PDF for the document, export as PDF at the exact pixel canvas size to avoid page scaling.
        </li>
      </ul>

      <h3>Examples of failures</h3>
      <p>
        Some common failure modes include: using a high-resolution photo that exceeds portal filesize limits, cropping the card in a way that hides the PAN number or name, and converting to PDF without setting the PDF page size to match pixel dimensions — causing an unexpected scale when the portal renders the file.
      </p>

      <h2>What to do if you get a rejection</h2>
      <p>
        First, read the portal’s rejection message carefully — it often mentions the reason (file size, unreadable text, wrong dimensions). Recreate the output with the exact dimensions, reduce compression slightly if text is blurred, and ensure the PDF pages are set correctly if you’re providing a PDF.
      </p>

      <h3>Real-world example</h3>
      <p>
        A user once uploaded a high-quality PNG to a broker portal and received a rejection citing file size. The user compressed aggressively to reach the size limit and the PAN number became unreadable. The fix was to switch to a slightly smaller pixel dimension while maintaining moderate compression and increasing contrast. The portal accepted the new file because characters remained legible.
      </p>

      <h2>Practical workflow recommendation</h2>
      <p>
        For the smoothest experience, keep two pre-made versions of your PAN image: a compact version (UTI-friendly) and a larger, higher-resolution version (NSDL-style) for portals that allow larger files. Store them with clear file names and an accompanying note about where you used each size successfully. Over time you will learn which institutions prefer which format.</p>

      <h2>Quick reference: common recommended sizes</h2>
      <p>While each portal may vary, the following table reflects common values you will encounter:</p>
      <ul>
        <li><strong>Photograph:</strong> UTI example — 213 × 213 px; NSDL example — 350 × 350 px</li>
        <li><strong>Signature:</strong> Commonly around 450 × 150 px (wide and short)</li>
        <li><strong>Document/PDF:</strong> Output as a PDF sized to match the portal’s pixel dimensions; do not let the PDF scale when uploaded</li>
      </ul>

      <h2>Validation tips</h2>
      <p>
        Before uploading, validate your file offline by opening it on a desktop monitor at 100% and ensuring the PAN number and name are crisp. Test your file size and format using small online validators or by attempting a mock upload if the portal offers a sandbox. If the portal returns cryptic errors, capture the error text and contact the portal’s support team — sometimes portals have undocumented constraints.
      </p>

      <h2>Mobile vs desktop workflows</h2>
      <p>
        Many users prepare documents on their smartphones. While phones can produce excellent photos, pay attention to cropping and glare. Use the Pan Card Resizer on a desktop when possible for finer control and a clearer preview. If you must use a phone, zoom to 100% and inspect important details closely before uploading.
      </p>

      <h2>Final thoughts</h2>
      <p>
        Different portals will continue to have different technical expectations — being prepared with both compact and full-size variants reduces frustration. The Pan Card Resizer is designed to make it straightforward to produce each variant and verify it visually before you upload.
      </p>

      <h3>Example troubleshooting checklist</h3>
      <p>
        When a specific portal rejects a file repeatedly, use a short checklist: confirm pixel dimensions, strip any embedded metadata, preview the file at 100%, and try a slightly different compression setting or format (JPEG vs PNG). Keep a log of which variants were accepted by which portal—over time this becomes a quick reference and saves repeated work. Also consider creating named presets in your device so you can export a UTI or NSDL version in one click.
      </p>

      <p>
        For the best results, combine these practical steps with the Pan Card Resizer’s profile presets and preview tools. If you encounter repeated rejections from a particular service, reach out to their support and keep a note of their successful requirements for future use.
      </p>
    </Container>
  );
}

export default BlogNSDLvsUTIComparison;