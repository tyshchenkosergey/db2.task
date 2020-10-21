const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

// redirect to index route
router.get('/', messageController.Message);

// create route.
router.post('/messages', messageController.Message_create);

// index route.
router.get('/messages', messageController.Message_all);

// show route
router.get(
  '/messages/single/:id([0-9a-fA-F]{24})',
  messageController.Message_detail
);

// show with pagination route
router.get(
  '/messages/list/:pageNum([0-9]{1,3})',
  messageController.Message_list
);

//other routes here
router.get('*', messageController.Message_wrong);

module.exports = router;
