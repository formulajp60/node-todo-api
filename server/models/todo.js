var mongoose = require('mongoose');

//save new something (Mongoose Model)
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


module.exports = {Todo};

//create

/* var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc)=> {
    console.log('saved to do', doc);
}, (e)=> {
    console.log('Unable to save todo');
});

*/



/* var newTodo2 = new Todo({
    text: 23
});

newTodo2.save().then((doc)=>{
    console.log('Todo Created', JSON.stringify(doc, undefined, 2));
}, (e)=> {
    console.log('Unable to create to do');
}); */
