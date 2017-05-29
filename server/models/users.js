const mongoose = require('mongoose');
const Users = mongoose.model('Users',{
    user: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});

module.exports = {Users};