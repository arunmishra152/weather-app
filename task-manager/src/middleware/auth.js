 const jwt = require('jsonwebtoken')
 const User = require('../models/users')

const auth = async (req,res,next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoder = jwt.verify(token, 'mynameisArun')
        const user = await User.findOne({_id: decoder._id, 'tokens.token': token})
        if(!user){
            throw new Error
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401).send('please authenticate')
    }

}

module.exports = auth