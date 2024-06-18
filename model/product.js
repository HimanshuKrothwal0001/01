const mongoose = require('mongose')
const productSchema = new schema({
    name:{
        type:String,
        require: true,
        unique : true,
        
    },
    price:{
        type:String,
        require:true,
        default:null
    },
    descrption:{
        title:{
            type:String,
            default:null,
            require:true
        }
    }
})
module.exports()=mongoose.model('product')