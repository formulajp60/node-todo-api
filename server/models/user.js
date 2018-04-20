var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};


/* var user1 = new user({
    email: 'galib60@gmail.com'
});

user1.save().then((res)=> {
    console.log("User created", JSON.stringify(res, undefined, 2));
}, (e)=> {
    console.log("unable to create user");
}); */

