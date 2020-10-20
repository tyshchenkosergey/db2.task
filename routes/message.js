const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

router.get('/', messageController.Message);
// create route.
router.post('/messages', messageController.Message_create);

// index route.
router.get('/messages', messageController.Message_all);

// show route
router.get('/messages/single/:id', messageController.Message_detail);

// show with pagination route
router.get('/messages/list/:pageNum([0-9]{3})', messageController.Message_list);

module.exports = router;
