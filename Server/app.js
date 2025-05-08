const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  user: 'postgres',     
  host: 'localhost',
  database: 'Skull_Kap_Studios',     
  password: 'bashyadatabase', 
  port: 5432,
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
// serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client/public')));

// sign Up Endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    await pool.query(
      [username, email, hash]
    );
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(400).send('Username or email already exists');
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

  if (result.rows.length === 0) {
    return res.status(400).send('Invalid username or password');
  }

  const user = result.rows[0];
  const valid = await bcrypt.compare(password, user.password_hash);
  if (valid) {
    res.status(200).send('Login successful');
  } else {
    res.status(400).send('Invalid username or password');
  }
});
// route for the main HTML page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// route for userRoute API
let userRoutes = require(path.join(__dirname, '../server/route/userRoute.js'));
app.use('/api/user', userRoutes);

// route for website feature API
let websiteFeatureRoutes = require(path.join(__dirname, '../server/route/websiteFeatureRoute.js'));
app.use('/api/websiteFeature', websiteFeatureRoutes);

// console log for errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// declare port and start server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Skull Kap Studios listening on port ${PORT}!`));