// require the express library
var express = require('express');
// create chainable route handlers for a path by using app.route()
var router = express.Router();

const userController = require('../controller/userController');

// all users routes
router.route('/')
    .get((req, res) => {
        userController.getAllUsers(req, res);
    })
    .post((req, res) => {
        userController.saveUser(req, res);
    });

// user by array index route
router.route('/:index')
    .get((req, res) => {
        userController.getUser(req, res);
    });

console.log("Module UserRoute loaded");

module.exports = router;