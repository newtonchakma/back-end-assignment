
let users = require('./../users.json');
 //console.log(users);


  module.exports.getAllUsers=(req,res)=>{
    const {limit} =req.query;
    console.log('hello',limit);
    res.send(users.slice(0,limit))
  }


 module.exports.getRandomUser = (req,res)=>{
    res.send(users[Math.floor(Math.random() * users.length)])
} 