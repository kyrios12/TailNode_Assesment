const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    userName:{
        type: String,
    },
    user_id:{
        type:String,
    }
});
module.exports = mongoose.model('User',UserSchema);