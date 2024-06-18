const mongoose = require('mongoose')
const roleschema = new schema ({
    name:{
        type:String,
        default: null,
        require: true
    },

});
module.exports = mongoose.model('role')