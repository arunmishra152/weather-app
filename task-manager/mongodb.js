// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-maneger'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    //console.log('connected successfully');

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //    time: '23'
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     name: 'Angular'
    // },{
    //     $set: {
    //         time: '5hrs'
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId("5cc2d79926a8c92284810998")
    // },{
    //     $set: {
    //         age: 30
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

//    db.collection('users').find({_id: new ObjectId("5cc2d79926a8c92284810998")}).toArray((error,result)=>{
//     if(error){
//         return console.log(error)
//     }
//     console.log(result);
//    })
   
    // db.collection('users').insertOne({
    //     name: 'Arun',
    //     age: 22
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Deepak',
    //         age: '25'
    //     },
    //     {
    //         name: 'Ankit',
    //         age: '23'
    //     },
    //     {
    //         name: 'Saurabh',
    //         age: '23'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert');
    //     }
    //     console.log(result.ops);
    // })
})