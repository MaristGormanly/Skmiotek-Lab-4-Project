const User = require('../model/user');

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