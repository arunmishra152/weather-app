const express = require('express')
const Task = require('../models/task')
const router = express.Router()


router.post('/tasks',(req,res)=>{
    var task = new Task(req.body)
    try {
        task.save()
        res.status(201).send(task)
    } catch (error) {
        res.send(error)
    }
})

router.get('/tasks',async (req,res)=>{
    try {
        var tsk = await Task.find({})
        if(!tsk){
            return res.status(404).send('task not found')
        }
        res.status(200).send(tsk);
    } catch (error) {
        res.send(error);
    }
   
})

router.get('/task/:id',async (req,res)=>{
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send('no task found')
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send()
    }
})

router.patch('/task/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "completed"]
    const isValidOPeration = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOPeration){
        return res.status(400).send({error: 'invalid updates'})
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!task){
            return res.send(404).send('user not found')
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(400).send()
    }
})

router.delete('/task/:id',async(req,res)=>{
    const _id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(_id)
        if(!task){
            return res.status(404).send('user not find')

        }
        res.status(200).send(task)
    } catch (error) {
        res.status(400).send()
    }
})
 module.exports = router