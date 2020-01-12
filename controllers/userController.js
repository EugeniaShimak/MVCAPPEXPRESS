const User = require("../models/users.js");

exports.addUser = function (request, response){
    response.render("createUser.pug");
};
exports.getUsers = function(request, response){
    response.render("users.pug", {
        users: User.getAll()
    });
};
exports.postUser= function(request, response){
    const username = request.body.name;
    const userage = request.body.age;
    const user = new User(username, userage);
    user.save();
    response.redirect("/users");
};