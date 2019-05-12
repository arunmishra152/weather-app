const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        validate(value) {
            if(value < 18){
                throw new Error('Age cant be less then 18')
            }
        },
        default: 20
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        tolowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value){
            if(value.includes('password')){
                throw new Error('cant set password')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
    
})

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = await jwt.sign({_id: user._id.toString()}, 'mynameisArun')
    user.tokens = user.tokens.concat({token})
   await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }
    const ismatch = await bcrypt.compare(password, user.password)
    if(!ismatch){
        throw new Error('Unable to login')
    }
    return user
}

// Hash password before saving the data
userSchema.pre('save',async function(next){
    const user = this
   if(user.isModified('password')){
       user.password = await bcrypt.hash(user.password,8)
   }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User;