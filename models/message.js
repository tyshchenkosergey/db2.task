const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    email: String,
    text: String
})

let Message = mongoose.model("Message", messageSchema);
module.exports = Message;