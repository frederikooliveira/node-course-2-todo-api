const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

//Todo.FindOneAndRemove
//Todo.FindByIdAndRemove()

Todo.FindOneAndRemove({_id: "5a84d6c0fefdf3c31501096b"}).then((todo)=>{

});

Todo.findByIdAndRemove('5a84d6c0fefdf3c31501096b').then((todo)=>{
    console.log(todo);
});