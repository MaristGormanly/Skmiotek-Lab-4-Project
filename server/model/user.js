// basic user class
class User {
    constructor (firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
        }
}

// export array for user class
exports.createUser = function ( firstName, lastName ) {
    console.log("Module User loaded");
    return new User( firstName, lastName );
};
