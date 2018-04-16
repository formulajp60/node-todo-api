//const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to Connect to MongoDb Server'); // to stop the next command
    }

    console.log('Connected to MongoDb server');


    var db = client.db('TodoAPp');

    /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5aca01f012310a3466cf7c49") // filter argument
    }, {
        $set: {
            completed: false
        } //update operator
    }, {
        returnOriginal: false // don't want to return the original
    }).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').findOneAndUpdate({
        name: "Rony"
    }, {
        $set: { name: "Galib" },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();



});