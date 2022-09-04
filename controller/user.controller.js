
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

module.exports.saveAUser = (req,res)=>{
  const data =req.body;
  const {id, name, contact, address, gender, photoUrl} =data;

  id && gender && contact && address && photoUrl && name ? users.push(data) && res.send(users)
   : 
   res.send('invalid data')
}

module.exports.updateUser = (req,res)=>{
  const id = req.params.id;
  const newData = req.body;
  const selected = users.find(user => user.id === Number(id));
  if(!selected){
    res.send ('user not found!!')
  }else if(selected && newData){
    const {id, name, gender,contact,address,photoUrl} = newData;
    id?selected.id = id:selected.id = selected.id
    name? selected.name = name :selected.name = selected.name
    gender? selected.gender = gender: selected.gender = selected.gender
    contact? selected.contact = contact: selected.contact
    address? selected.address = address: selected.address
    photoUrl? selected.photoUrl = photoUrl: selected.photoUrl
    res.send(selected)
  }

}

  // delete a user
  module.exports.deleteAUser = (req, res)=>{
    const Id = req.params.id;
    const data = users.findIndex(user =>user.id === Number(Id));
    data === -1
    ?
    res.send('user not found')
    :
    users.splice(data, 1) && res.send(users)
  }

