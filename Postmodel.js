const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    post:{
        type: String
    }
},{timeStamps:true})

module.exports = mongoose.model('Post',PostSchema);