//library
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');


//local
var {
    mongoose
} = require('./db/mongoose.js')
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        console.log(doc);
    }, (e) => {
        res.status(400).send(e);
    });
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});




app.post('/users', (req, res) => {
    var user = new User({
        email: req.body.email
    });

    user.save().then((doc) => {
        console.log(doc.email);
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectId.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send(todo);

    }).catch(()=> res.status(404).send());

});




app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = {
    app
};