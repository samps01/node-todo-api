const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log(`Unable to connect to MongoDB server`);
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'First test seed',
    //     completed: 'false'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert ',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name:'Sam',
    //     location:'Jersey city',
    //     age:26
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert into users');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })  // db.collection('Users').insertOne({
    //     name:'Sam',
    //     location:'Jersey city',
    //     age:26
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert into users');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    db.close();
});