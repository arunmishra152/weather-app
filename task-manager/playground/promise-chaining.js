require('../src/db/mongoose')
const User = require('../src/models/users')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5cc96f021ace9403906c9777',{age: 40}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 40})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

Task.findByIdAndDelete('5cc98cee5e57bb21cca2d17e').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: "true"})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})