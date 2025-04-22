const express = require('express');
const websiteFeatureController = require('../controller/websiteFeatureController');

const router = express.Router();

// all website features routes
router.route('/')
    .get((req, res) => {
        websiteFeatureController.getAllWebsiteFeatures(req, res);
    })
    .post((req, res) => {
        websiteFeatureController.saveWebsiteFeature(req, res);
    });

// website feature by array index route
router.route('/:index')
    .get((req, res) => {
        websiteFeatureController.getWebsiteFeature(req, res);
    });

console.log("Module WebsiteFeatureRoute loaded");

module.exports = router;
