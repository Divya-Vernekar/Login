const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/login")

.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('connection not done ');
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})
const Login = new mongoose.model('Login', userSchema);
module.exports = Login