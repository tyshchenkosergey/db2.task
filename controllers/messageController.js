const Message = require('../models/message');
const { validationResult } = require('express-validator');

//Wrong route handler
exports.Message = function (req, res) {
  res.redirect('/messages');
};

//Display all Messages.
exports.Message_all = function (req, res) {
  Message.find({}, (err, allMessages) => {
    if (err) {
      res.json(err);
    } else {
      res.json(allMessages);
    }
  });
};

//Display detail page for a specific Message.
exports.Message_detail = function (req, res) {
  Message.findById(req.params.id, (err, foundMessage) => {
    if (err) {
      res.json(err);
    } else {
      res.json(foundMessage);
    }
  });
};

// Display list of Messages.
exports.Message_list = function (req, res) {
  Message.find({})
    .skip(req.params.pageNum * 10)
    .limit(10)
    .exec({}, (err, found) => {
      if (err) {
        res.json(err);
      } else {
        res.json(found);
      }
    });
};

// Handle Message create on POST.
exports.Message_create = function (req, res) {
  // [
  //   check('email').isEmail().withMessage('Invalid email format'),
  //   check('text')
  //     .isLength({ min: 1 }, { max: 5 })
  //     .withMessage('A text must be 1 to 100 characters long :<')
  //     .isEmpty({ ignore_whitespace: false })
  //     .withMessage("Text field can't be empty"),
  // ],
  // (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  Message.create(
    {
      email: req.body.email,
      text: req.body.text,
    },
    (err, message) => {
      if (err) {
        res.json(err);
      } else {
        res.json(message);
      }
    }
  );
};

exports.Message_wrong = function (req, res) {
  res.json('Sorry, this is an invalid URL.');
};
