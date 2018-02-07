// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({
    //     text: 'eat lunch'
    // }).then((result)=>{
    //     console.log(result);
    // })

    //delete one
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // })

    //find one e delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Fred'}).then((result) =>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a7a4abd0a3bf23bb8c1888c")}).then((result)=>{
        console.log(result);
    })
    // db.close();
});