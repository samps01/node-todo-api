const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true,
        validate:{
            validator: validator.isEmail,
            message: "Not a valid email"
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }]
});

userSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    return _.pick(userObject,['email','_id']);
};
userSchema.methods.generateAuthToken = function(){
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
  user.tokens.push({access,token});

  return user.save().then(()=>{
    return token;
  });
};
userSchema.statics.findByToken = function(token){
    let User = this;
    let decoded;

    try{
        decoded = jwt.verify(token,'abc123');
    }catch (e){
        return Promise.reject('Error');
    }

    return User.findOne({
        _id: decoded._id,
        'tokens.token':token,
        'tokens.access': 'auth'
    })
};
const Users = mongoose.model('Users',userSchema);


module.exports = {Users};