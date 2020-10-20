const express = require('express');
const router = express.Router();

const Message = require('../models/message');

//landing page route
router.get('/', (req, res) => {
  res.redirect('/messages');
});

module.exports = router;
