const fs = require('fs');
const path = require('path');

// Copy 404.html from public to dist
const source = path.join(__dirname, 'public', '404.html');
const dest = path.join(__dirname, 'dist', '404.html');

if (fs.existsSync(source)) {
  fs.copyFileSync(source, dest);
  console.log('✓ 404.html copied to dist');
} else {
  console.log('⚠ 404.html not found in public folder');
}

