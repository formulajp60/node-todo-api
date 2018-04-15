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

    //delete many

    /* db.collection('Todos').deleteMany(
        {text: 'Eat Lunch'}
    ).then(
        (result) => {
            console.log(result);
        }
    ); */
    //delete one (the last one)

    /* db.collection('Todos').deleteOne(
        {text: 'Eat Lunch'}
    ).then(
        (result) => {
            console.log(result);
        }
    ); */

    //findOneAndDelete

    /*  db.collection('Todos').findOneAndDelete({
         completed: false
     }).then(
         (result) => {
             console.log(result);
         }
     ); */

    //client.close();

    //challenge
    /* db.collection('Users').deleteMany(
        {name: 'Jane'}
    ).then(
        (result) => {
            console.log(result);
        }
    ); */

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5acc771b76f351257cc335b0")
    }).then((result) => {
        console.log(result);
    });
});