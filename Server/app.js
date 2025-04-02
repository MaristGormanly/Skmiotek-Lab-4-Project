const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Route for the main HTML page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// Start the server
app.listen(1337, () => console.log('Skull Kap Studios listening on port 1337!'));
