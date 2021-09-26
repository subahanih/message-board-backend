const express = require('express');
const router = express.Router();
const cache = require('../middleware/routeCache.middleware');
const messageController = require('../controllers/message.controller');
const awaitHandlerMiddleware = require('../middleware/awaitHandler.middleware');
const { validateCreateMsg } = require('../middleware/messageValidator.middleware')

/* http://localhost:3001/api/v1/message/channelId/1 */
router.get('/channelId/:channelId', cache(60), awaitHandlerMiddleware(messageController.getMsgByChannelId));

/* http://localhost:3001/api/v1/message/channel */
router.get('/channel', cache(60), awaitHandlerMiddleware(messageController.getAllChannel));

/* http://localhost:3001/api/v1/message/create */
router.post('/create', validateCreateMsg, awaitHandlerMiddleware(messageController.createMessage));

/* http://localhost:3001/api/v1/message/userId/5 */
router.get('/userId/:userId', cache(600), awaitHandlerMiddleware(messageController.getUserById));

module.exports = router;