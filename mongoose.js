const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/Assesment_db',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log(`Connected to Assesment`);
}).catch((err)=>{
    console.log(err);
});
module.exports = db;