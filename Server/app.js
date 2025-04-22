const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Route for the main HTML page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

const express = require('express');
const bodyParser = require('body-parser');
const websiteFeatureRoutes = require('./server/route/websiteFeatureRoute');

const websiteFeatureApp = express(); 
websiteFeatureApp.use(bodyParser.json());

// WebsiteFeature API routes
websiteFeatureApp.use('/api/websiteFeature', websiteFeatureRoutes);

// Start the server
app.listen(1337, () => console.log('Skull Kap Studios listening on port 1337!'));
