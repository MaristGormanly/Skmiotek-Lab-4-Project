const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// server start information
console.log('Starting Skull Kap Studios server...');
console.log('Current directory:', __dirname);

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// serve static files from the 'public' directory
app.use(express.static('public'));
console.log('Serving static files from:', path.join(__dirname, 'public'));

// Check if important files exist
const cssPath = path.join(__dirname, 'public/css/style.css');
const jsPath = path.join(__dirname, 'public/js/main.js');
const indexPath = path.join(__dirname, 'public/index.html');

console.log('Checking for critical files:');
console.log('CSS file exists:', fs.existsSync(cssPath));
console.log('JS file exists:', fs.existsSync(jsPath));
console.log('HTML file exists:', fs.existsSync(indexPath));

// Route for any route to serve index.html
app.get('*', (req, res) => {
    console.log('Serving index.html for route:', req.url);
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = 1337;
app.listen(PORT, () => {
    console.log(`Skull Kap Studios server running at http://localhost:${PORT}`);
    console.log('Open this URL in your browser to view the site');
});
