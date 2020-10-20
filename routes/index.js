const express = require('express');
const router = express.Router();

const Message = require('../models/message');


//landing page route
router.get('/', (req, res) => {
  res.redirect('/messages');
});


// //index route
// router.get('/messages', (req, res) => {
//   Message.find({}, (err, allMessages) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(allMessages);
//     }
//   });
// });

// create route
// router.post('/messages', (req, res) => {
//   let newMessage = {
//     email: req.body.email,
//     text: req.body.text,
//   };
//   Message.create(newMessage, (err, newMessage) => {
//     if (err) {
//       res.json(err.message);
//       console.log(err);
//     } else {
//       res.json(newMessage);
//     }
//   });
// });

//show single route
// router.get('/messages/single/:id', (req, res) => {
//   Message.findById(req.params.id, (err, foundMessage) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(foundMessage);
//     }
//   });
// });

//show list route
// router.get('/messages/list/:pageNum([0-9]{3})', (req, res) => {
//   Message.find({})
//     .skip(req.params.pageNum * 10)
//     .limit(10)
//     .exec({}, (err, found) => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(found);
//       }
//     });
// });

module.exports = router;
