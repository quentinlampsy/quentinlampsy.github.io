const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

const outDir = path.join(__dirname, 'out');
const rootDir = path.join(__dirname, '..');

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('📦 Copying files from out/ to root directory...');

// Files and directories to copy
const filesToCopy = fs.readdirSync(outDir);

// Backup the portfolio-nextjs folder location
const filesToSkip = ['portfolio-nextjs', 'pictures', 'README.md', '.git', '.gitignore'];

try {
  filesToCopy.forEach(file => {
    const srcPath = path.join(outDir, file);
    const destPath = path.join(rootDir, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      // Copy directory recursively
      copyDir(srcPath, destPath);
      console.log(`  ✓ Copied ${file}/`);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
      console.log(`  ✓ Copied ${file}`);
    }
  });
  
  console.log('\n✅ Deployment complete! Files are ready to be committed and pushed to GitHub.');
  console.log('\nNext steps:');
  console.log('  1. cd ..');
  console.log('  2. git add .');
  console.log('  3. git commit -m "Deploy updated portfolio"');
  console.log('  4. git push origin main');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}

// Helper function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
