//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');  //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
       return console.log('Unable to Connect to MongoDb Server'); // to stop the next command
    }

    console.log('Connected to MongoDb server');

    
    var db = client.db('TodoAPp');

    db.collection('Users').find({
        //_id: new ObjectID('5aca01f012310a3466cf7c49')
        name: 'Jane'
    }).toArray().then((docs)=> {
        console.log(JSON.stringify(docs, undefined, 2));
    }, 
    (err)=>{
        console.log('Not Found');
    }
);
    
   /*  .toArray().then(
    (docs)=>{
        console.log('Todos');
        //console.log(JSON.stringify(docs, undefined, 2));
        console.log(docs.name);
    },
    (err)=> {

    }); */ //returns mongodb cursor
   

   /* var db = client.db('TodoAPp');
   db.collection('Todos').count().then(
   (count)=>{
       console.log(`Todos count: ${count}`);
   },
   (err)=> {

   }); */

    client.close();
});