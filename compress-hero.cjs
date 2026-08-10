const path = require('path');
const inputPath = path.join(__dirname, 'src', 'assets', 'Adaptsync.jpg.jpeg');
const outputPath = path.join(__dirname, 'public', 'adaptsync-hero.jpg');
const sharp = require('sharp');

// Resize to 12000px wide at quality 92 — targets ~10MB
sharp(inputPath, { limitInputPixels: false })
  .resize({ width: 12000, withoutEnlargement: true })
  .jpeg({ quality: 92 })
  .toFile(outputPath)
  .then(info => {
    const sizeMB = (info.size / 1024 / 1024).toFixed(2);
    console.log('✅ Done! Size: ' + sizeMB + ' MB  (' + info.width + ' x ' + info.height + 'px)');
  })
  .catch(err => { console.error('❌', err.message); process.exit(1); });
