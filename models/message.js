const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: 'Email address is required',
      match: [
        /^[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{1,}[.]{1}[a-zA-Z0-9]{2,}$/,
        'Use standart email format',
      ],
    },
    text: {
      type: String,
      trim: true,
      required: "You didn't type any message",
      minlength: 0,
      maxlength: 100,
      match: [/^[^$|\s+]{1,100}$/, 'Use standart text format'],
    },
  },
  { timestamps: true }
);

let Message = mongoose.model('Message', messageSchema);
module.exports = Message;
