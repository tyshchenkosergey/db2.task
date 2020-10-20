const Message = require('../models/message');

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
  let newMessage = {
    email: req.body.email,
    text: req.body.text,
  };
  Message.create(newMessage, (err, newMessage) => {
    if (err) {
      res.json(err.message);
      console.log(err);
    } else {
      res.json(newMessage);
    }
  });
};

exports.Message_wrong = function (req, res) {
  res.json('Sorry, this is an invalid URL.');
};
