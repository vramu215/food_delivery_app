const { default: mongoose } = require('mongoose')

constmongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})
model.exports=mongoose.model('User',UserSchema)