const fs = require('fs');
const path = require('path');

const siteRoot = 'https://pancardresizers.netlify.app';
const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// List of routes to include. Exclude legal pages intentionally (privacy, terms, disclaimer).
const routes = [
  '/',
  '/blogs',
  '/blog/resize-tips',
  '/blog/document-guide',
  '/blog/best-practices',
  '/blog/pan-essential-info',
  '/blog/pan-apply-update',
  '/blog/pan-resizer-guide',
  '/blog/nsdl-vs-uti',
  '/blog/image-optimization',
  '/tools/pan-resizer'
];

function today() {
  return new Date().toISOString().split('T')[0];
}

function build() {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n`;
  const footer = '\n</urlset>';

  let body = '';
  for (const route of routes) {
    const loc = siteRoot.replace(/\/$/, '') + route;
    body += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today()}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n\n`;
  }

  const xml = header + body + footer;
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log('Sitemap written to', outPath);
}

build();
