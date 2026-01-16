import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.resolve(__dirname, '../node_modules/@shoelace-style/shoelace/dist/assets');
const destination = path.resolve(__dirname, '../public/shoelace-assets/assets');

console.log(`Copying Shoelace assets from ${source} to ${destination}...`);

try {
  if (!fs.existsSync(source)) {
    console.error(`Source directory does not exist: ${source}`);
    process.exit(1);
  }

  // Ensure destination directory exists
  fs.mkdirSync(destination, { recursive: true });

  // Copy recursively
  fs.cpSync(source, destination, { recursive: true });

  console.log('Shoelace assets copied successfully!');
} catch (err) {
  console.error('Error copying assets:', err);
  process.exit(1);
}
