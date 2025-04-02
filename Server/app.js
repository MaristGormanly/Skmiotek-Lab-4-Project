const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

// Start the server
const PORT = 1337;
app.listen(PORT, () => {
    console.log(`Skull Kap Studios server running at http://localhost:${PORT}`);

});
