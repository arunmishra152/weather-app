const express = require('express')
require('./db/mongoose')
const userrouter = require('./routers/user-router')
const taskrouter = require('./routers/task-router')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(userrouter)
app.use(taskrouter)

// const jwt = require('jsonwebtoken')
// const myfunction2 = async ()=>{
//     const token = await jwt.sign({_id: 'LilArun'}, 'mynameisArun', { expiresIn: 60 * 60 })
//     console.log(token);
//     const verify = await jwt.verify(token, 'mynameisArun')
//     console.log(verify)
// }
// myfunction2()
//const bcrypt = require('bcrypt')

// const myfunction = async ()=>{
//     const password = 'Arun123'
//     const hashedPassword = await bcrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatched = await bcrypt.compare('arun123',hashedPassword)
//     console.log(isMatched)
// }
// myfunction()

app.listen(port,()=>{
    console.log('server is running on port ' + port);
})