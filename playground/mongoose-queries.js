const {ObjectID}  = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Users} = require('./../server/models/users');

const id = '592c64fb995f2e06f72e4123';

if(!ObjectID.isValid(id)){
    console.log('Invalid id');
}

Users.findById(id).then((user)=>{
    if(!user){
        console.log('unable to find user');
    }
   console.log(user);
},(e)=>{
    console.log(e);
});





