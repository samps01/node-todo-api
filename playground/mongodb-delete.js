const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log(`Unable to connect to MongoDB server`);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteOne({text:'trial 1'}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5928beaf88f0c826acf1ca6f')}).then((result)=>{
        console.log(result);
    })
    //db.close();
});