const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todos');
const {Users} = require('./models/users');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    const todo = new Todo({
        text: req.body.text
    })
    todo.save().then((data)=>{
        res.send(data);
    },(e)=>{
        res.status(400).send(e);
    })
});

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
});

module.exports={app};