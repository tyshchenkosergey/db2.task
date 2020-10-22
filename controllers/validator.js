const { check } = require('express-validator');

const validation = [
  check('email')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage("Email field can't be empty")
    .isEmail()
    .withMessage('Invalid email format'),
  check('text')
    .isLength({ min: 1 }, { max: 100 })
    .withMessage('A text must be 1 to 100 characters long')
    .not()
    .isEmpty({ ignore_whitespace: true })
    .withMessage("Text field can't be empty"),
];

module.exports = validation;
