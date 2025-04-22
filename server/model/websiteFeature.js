class WebsiteFeature {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

exports.createWebsiteFeature = function (name, description) {
    console.log("Module WebsiteFeature loaded");
    return new WebsiteFeature(name, description);
};
