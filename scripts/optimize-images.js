const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Input file (ensure public/hero.webp exists) and output folder
const input = path.join(__dirname, '..', 'public', 'hero.webp');
const outDir = path.join(__dirname, '..', 'public');

const sizes = [480, 768, 1200];

async function build() {
  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }

  for (const w of sizes) {
    const webpOut = path.join(outDir, `hero-${w}.webp`);
    const avifOut = path.join(outDir, `hero-${w}.avif`);

    // Output WebP
    await sharp(input)
      .resize({ width: w })
      .webp({ quality: 80 })
      .toFile(webpOut);

    // Output AVIF
    await sharp(input)
      .resize({ width: w })
      .avif({ quality: 60 })
      .toFile(avifOut);

    console.log('Created:', webpOut, avifOut);
  }
  console.log('All done.');
}

build().catch(err => { console.error(err); process.exit(1); });
