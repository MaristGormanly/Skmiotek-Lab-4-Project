const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
// serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client/public'))); 

// route for the main HTML page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// route for userRoute API
let userRoutes = require('../route/userRoute');
app.use('/api/user', userRoutes);

// route for website feature API
let websiteFeatureRoutes = require('../route/websiteFeatureRoute');
app.use('/api/websiteFeature', websiteFeatureRoutes);

// console log for errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// declare port and start server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Skull Kap Studios listening on port ${PORT}!`));