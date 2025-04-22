const WebsiteFeature = require('../model/WebsiteFeature.js');

let websiteFeatures = [];

// Initial website objects
let chatFeature = WebsiteFeature.createWebsiteFeature("Chat", "Real-time communication between users.");
let musicUpload = WebsiteFeature.createWebsiteFeature("Music Upload", "Upload and share your music with others.");
let collaborationTool = WebsiteFeature.createWebsiteFeature("Collaboration Tool", "Work on music projects with other users.");

// Array for objects
websiteFeatures.push(chatFeature, musicUpload, collaborationTool);

// Get all website objects
exports.getAllWebsiteFeatures = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(websiteFeatures);
};

// Website feature by index
exports.getWebsiteFeature = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(websiteFeatures[req.params.index]);
};

// Save new website object
exports.saveWebsiteFeature = (req, res) => {
    let newFeature = WebsiteFeature.createWebsiteFeature(req.body.name, req.body.description);
    websiteFeatures.push(newFeature);
    res.setHeader('Content-Type', 'application/json');
    res.send(websiteFeatures);
};

console.log("Module WebsiteFeatureController loaded");
