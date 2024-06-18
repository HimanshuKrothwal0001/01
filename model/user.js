const mongoose = require("mongoose")
const userSchema = new schema({
    firstname:{
        type:String,
        default: null,
        required: true
    },
    lastname:{
        type:String,
        default: null,
        required: false
    },
    email:{
        type:String,
        default: null,
        required: true,
        unique : true
    },
    username:{
        type:String,
        default: null,
        required: true,
        unique:true
    },
    password:{
        type:String,
        default: null,
        required: true
    },
    token:{
        type:String
    }
});
module.exports = mongoose.model('user')