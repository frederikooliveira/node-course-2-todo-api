const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')
const {ObjectId} = require('mongodb');

// var id = '5a837dd626f4751c1fc95fcb';
   var idUser = '5a7cd3ee2bed03f83ba09d73';
// if(!ObjectId.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=> console.log(e));

User.findById(idUser).then((user) =>{
    if (!user){
        return console.log('User not found');
    }
    console.log('User by id', user);
}).catch((e)=> console.log(e));