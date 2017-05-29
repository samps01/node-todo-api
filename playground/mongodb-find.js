const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({_id: new ObjectID('5928c276aec2e491ade0505f')}).toArray().then((res)=>{
    //     console.log(`Todos`);
    //     console.log(JSON.stringify(res,undefined,2));
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(count);
    // }).catch((err)=>{
    //     console.log(err)
    // })
    //db.close();

    db.collection('Users').find({name:'Sam'}).toArray().then((user)=>{
        console.log(JSON.stringify(user,undefined,2));
    }).catch((err)=>{
        console.log(err);
    })
});