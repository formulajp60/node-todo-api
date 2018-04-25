const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5ae0e788e10fac0ee4eed17a";
var userID = '5ad9375289a1832428d23680';

// validation
if(!ObjectId.isValid(id)) {
    console.log('ID not valid')
}

/* Todo.find({
    _id: id // it will automatically converted to object ID
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id // it will automatically converted to object ID
}).then((todo) => {
    console.log('Todos', todo);
}); */

//find by ID
Todo.findById(id).then((todo)=>{
    if(!todo) {
        return console.log('ID not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

// find user by id
User.findById(userID).then((user) => {
    if(!user) {
        return console.log('No user found');
    }
    console.log('_______');
    console.log('          ');
    console.log('User', user);
    console.log('Email', user.email);
}).catch((e)=> console.log(e));

