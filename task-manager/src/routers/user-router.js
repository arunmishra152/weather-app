const express = require('express')
const router = express.Router()
const User = require('../models/users')
const auth = require('../middleware/auth')

router.post('/users', async (req,res)=>{
    var user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/login',async (req,res)=>{
    try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user, token})
    } catch (error) {
        res.status(400).send()
    }
   
})

router.get('/users/me',auth,async (req,res)=>{
    res.send(req.user)
    // try {
    //     var usr = await User.find({})
    //     if(!usr){
    //        return res.status(404).send('user not found')
    //     }
    //     res.status(201).send(usr)
    // } catch (error) {
    //     res.send(error);
    // }
})

router.get('/user/:id',async (req,res)=>{
    const _id = req.params.id
    console.log(req.params)
    try {
        const usrid = await User.findById(_id)
        console.log(usrid)
        if(!usrid){
            return res.status(404).send('user not found');
        }
        res.status(200).send(usrid)
    } catch (error) {
        res.status(500).send()
    }
})

router.patch('/user/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name","email","password","age"]
    const isValidOPeration = updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOPeration){
        return res.status(400).send({error: 'invalid updates'})
    }
    try {
        const user = await User.findById(req.params.id)
        
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new: true, runValidators: true})
        if(!user){
            return res.status(404).send('user not found')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/user/:id',async(req,res)=>{
    const _id = req.params.id
    try {
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send('user not find')

        }
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send()
    }
})


module.exports = router