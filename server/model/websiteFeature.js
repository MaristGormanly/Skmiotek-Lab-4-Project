// class for website feature object
class WebsiteFeature {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

// export array for object class
exports.createWebsiteFeature = function (name, description) {
    console.log("Module WebsiteFeature loaded");
    return new WebsiteFeature(name, description);
};
