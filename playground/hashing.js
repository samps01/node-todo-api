const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

let password = '123abc';

// bcrypt.genSalt(10,(err,salt)=>{
//    bcrypt.hash(password,salt,(err,hash)=>{
//       console.log(hash);
//    });
// });

let hashedPass = '$2a$10$j2MATU1ivEkApGrDYtuR3ucbPG.mdXlqY56EwqF2hLOhm8vVGHqSi';

bcrypt.compare(password,hashedPass,(err,res)=>{
   console.log(res);
});

//
// let message = "samson";
//
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// const data = {
//     id:4
// };
//
// const token = {
//     data,
//     hash:SHA256(JSON.stringify(data)+'sometext').toString()
// }
//
// const resultHash = SHA256(JSON.stringify(token.data)+'sometext').toString();
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// if(resultHash === token.hash){
//     console.log('Data has not been modified');
// }else{
//     console.log('its been modified');
// }

