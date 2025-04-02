const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

// Start the server
app.listen(1337, () => console.log('Skull Kap Studios listening on port 1337!'));
});
