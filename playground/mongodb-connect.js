//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');  //object destructuring

var obj = new ObjectID();
console.log(obj);

var user = { name: 'Galib', age: 27 } //object destructuring
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
       return console.log('Unable to Connect to MongoDb Server'); // to stop the next command
    }

    console.log('Connected to MongoDb server');

    //Insert

    var db = client.db('TodoAPp');

    db.collection('Todos').insertOne(
        {
            text: 'Something to do',
            completed: false
        }, 
        (err, result) => {
            if(err) {
                return console.log('Unable to insert Todo', err);
            }

            console.log(JSON.stringify(result.ops, undefined, 2));
        }
    );

    
   /*  db.collection('Users').insertOne(
        {   
            name: 'Honey',
            age: 25,
            location: 'Arawa Steet'
        },
        (err, result) => {
            if (err) {
                return('Unable to insert user data', err);
            }

           // console.log(JSON.stringify(result.ops, undefined, 2));
            console.log(JSON.stringify( result.ops[0]._id.getTimestamp() ) );
        }
    ); */
   

    client.close();
});