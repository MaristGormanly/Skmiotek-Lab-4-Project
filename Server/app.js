const express = require('express');
const path = require('path');
const app = express();

// Log current directory
console.log('Current directory:', __dirname);

// Serve static files from the correct location
app.use(express.static(path.join(__dirname, '../client/public')));

console.log('Static files directory:', path.join(__dirname, '../client/public'));

// Serve index.html for the root route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// Serve index.html for any other routes
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// Start the server
app.listen(1337, () => console.log('Skull Kap Studios listening on port 1337!'));
