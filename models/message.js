const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      match: [
        /^[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}$/,
        'Please fill a valid email address',
      ],
    },
    text: {
      type: String,
      trim: true,
      required: "Don't forget your message",
      minlength: 0,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

let Message = mongoose.model('Message', messageSchema);
module.exports = Message;
