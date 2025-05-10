const User = require('../model/user');
const bcrypt = require('bcrypt');
const db = require('../db');

// array to hold created users
let users = [];

// create a user
let user1 = User.createUser("Sebastian", "Kmiotek");
let user2 = User.createUser("Brian", "Gormanly");
let user3 = User.createUser("Michael", "Jackson");

// adding users array
users.push(user1, user2, user3);

// send entire users array as the body of the response as json
exports.getAllUsers = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users );
};

// retrieve the user in the :index parameter of the request and return as json
exports.getUser = ( req, res ) => {
    res.setHeader( 'Content-Type', 'application/json' );
    res.send( users[ req.params.index ] );
};

// save a user
exports.saveUser = ( req, res ) => {
    let newUser = User.createUser( req.body.firstName, req.body.lastName );
    users.push( newUser );
    res.setHeader( 'Content-Type', 'application/json' );
  res.send( users );
};

console.log("Module UserController loaded");

// user signup 
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      console.log('Signup input:', { username, email });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await db.query(
        'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)',
        [username, email, hashedPassword]
      );
  
      res.status(201).send({ message: 'User created' });
    } catch (err) {
      console.error('Signup error:', err);  
      res.status(500).send({ error: 'Signup failed' });
    }
  };
  
  
  exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
      const user = result.rows[0];
      if (!user) {
        return res.status(401).send({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid credentials' });
      }
  
      res.send({ message: 'Login successful', user: { username: user.username } });
    } catch (err) {
      console.error('Login error:', err);
      res.status(500).send({ error: 'Login failed' });
    }
  };