require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const fs = require('fs');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todos');
const {Users} = require('./models/users');
const {authenticate} = require('./middleware/authenticate');

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});

app.post('/todos',(req,res)=>{
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((data)=>{
        res.send(data);
    },(e)=>{
        res.status(400).send(e);
    })
});


app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
      res.send({todos})
   },(e)=>{
       res.status(400).send(e);
   });
});

app.get('/todos/:id',(req,res)=>{
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
          return res.status(404).send('Unable to find todo');
        }
        res.send({todo});
    }).catch((err)=>{
        res.status(400).send('Bad request');
    })
});

app.post('/users',(req,res)=>{
    const userObj = _.pick(req.body,['email','password']);
    debugger;
    const user = new Users(userObj);

    user.save().then(()=>{
        return user.generateAuthToken();
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((err)=>{
       res.send(err);
    });
});

app.post('/users/login',(req,res)=>{
   const body = _.pick(req.body,['email','password']);
   Users.findByCredentials(body.email,body.password).then((user)=>{
        res.send(user);
   }).catch((err)=>{
        res.status(401).send();
   });
});

app.get('/users/me',authenticate,(req,res)=> {
    res.send(req.user);
});
module.exports={app};