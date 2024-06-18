const mongoose = require('mongoose')
const {MONGODB_URL} = process.env

// mongoose.connect(MONGODB_URL,{
//     useNewUrlParser :true,
//     useUnifiedTopology:true
// })
// .then(console.log(`DB connected Successfully`))
// .catch((error)=>{
//     console.log(`DB connection failed`);
//     console.log(error);
//     process.exit(1)
// });
exports.connect=()=>{
mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(console.log(`DB connected`))
.catch((error)=>{
    console.log(`DB connection failed`);
    console.log(error);
    process.exit(1)

});
};