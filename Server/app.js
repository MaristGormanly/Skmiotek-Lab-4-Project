const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const pool = require('./db.js');

const userController = require('./controller/userController'); 

const postRoutes = require('./route/postRoute');
app.use('/api/posts', postRoutes);


app.post('/api/signup', userController.signup);
app.post('/api/login', userController.login);

// serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client/public')));

// route for the main HTML page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// route for userRoute API
let userRoutes = require(path.join(__dirname, '../server/route/userRoute.js'));
app.use('/api/user', userRoutes);

// console log for errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// declare port and start server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Skull Kap Studios listening on port ${PORT}!`));