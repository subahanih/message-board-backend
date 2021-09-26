const { body } = require('express-validator');

exports.validateCreateMsg = [
    body('channel_id')
        .exists()
        .withMessage('Channel ID is required.')
        .notEmpty()
        .withMessage('Channel ID must be filled.'),
    body('user_id')
        .exists()
        .withMessage('User ID is required.')
        .notEmpty()
        .withMessage('User ID must be filled.'),
    body('message')
        .exists()
        .withMessage('Mssage is required.')
        .notEmpty()
        .withMessage('Mssage must be filled.')
        .isLength({ min: 1 })
        .withMessage('Mssage must contain at least 1 character')
        .isLength({ max: 300 })
        .withMessage('Mssage can contain max 300 characters')
];