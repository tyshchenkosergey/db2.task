const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

// POST request for creating a Message.
router.post('/messages', messageController.Message_create);

// GET request for all Messages items.
router.get('/messages', messageController.Message_all);

// GET request for one Message.
router.get('/messages/single/:id', messageController.Message_detail);

// GET request for list of 10 Messages.
router.get('/messages/list/:numPage([0-9]{3})', messageController.Message_list);

// //index route
// router.get('/messages',
//   });

// create route
//   router.post('/messages', (req, res) => {
//     let newMessage = {
//       email: req.body.email,
//       text: req.body.text,
//     };
//     Message.create(newMessage, (err, newMessage) => {
//       if (err) {
//         res.json(err.message);
//         console.log(err);
//       } else {
//         res.json(newMessage);
//       }
//     });
//   });

//show single route
//   router.get('/messages/single/:id', (req, res) => {
//     Message.findById(req.params.id, (err, foundMessage) => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(foundMessage);
//       }
//     });
//   });
//   //show list route
//   router.get('/messages/list/:pageNum([0-9]{3})', (req, res) => {
//     Message.find({})
//       .skip(req.params.pageNum * 10)
//       .limit(10)
//       .exec({}, (err, found) => {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(found);
//         }
//       });
//   });

module.exports = router;
