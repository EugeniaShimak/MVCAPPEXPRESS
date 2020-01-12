const users = [];

module.exports= class User{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    save(){
        users.push(this);
    }
    static getAll(){
        return users;
    }
    static getUser(name){
        users.forEach(function (user) {
            if (user.name===name){
                return user;
            }
        })
    }
};