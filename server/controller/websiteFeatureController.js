const WebsiteFeature = require('../model/WebsiteFeature');

let websiteFeatures = [];

// create some initial website feature objects
let chatFeature = WebsiteFeature.createWebsiteFeature("Chat", "Real-time communication between users.");
let musicUpload = WebsiteFeature.createWebsiteFeature("Music Upload", "Upload and share your music with others.");
let collaborationTool = WebsiteFeature.createWebsiteFeature("Collaboration Tool", "Work on music projects with other users.");

// add initial website features to the array
websiteFeatures.push(chatFeature, musicUpload, collaborationTool);

// get all website features
exports.getAllWebsiteFeatures = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(websiteFeatures);
};

// get a website feature by index
exports.getWebsiteFeature = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(websiteFeatures[req.params.index]);
};

// save a new website feature
exports.saveWebsiteFeature = (req, res) => {
    let newFeature = WebsiteFeature.createWebsiteFeature(req.body.name, req.body.description);
    websiteFeatures.push(newFeature);
    res.setHeader('Content-Type', 'application/json');
    res.send(websiteFeatures);
};

console.log("Module WebsiteFeatureController loaded");
