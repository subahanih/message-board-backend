const UserModel = require('../models/user.model');
const MessageModel = require('../models/message.model');
const MessageBoardModel = require('../models/channel.model');
const MessageException = require('../utils/messageException.utils');
const { validationResult } = require('express-validator');

class MessageController {

    getUserById = async (req, res, next) => {
        let boardList = await UserModel.findOne({ user_id: req.params.userId });
        if (!boardList) {
            throw new MessageException(404, 'Message board is empty.');
        }

        res.send(boardList);
    };

    getAllChannel = async (req, res, next) => {
        let boardList = await MessageBoardModel.find();
        if (!boardList.length) {
            throw new MessageException(404, 'Message board is empty.');
        }

        res.send(boardList);
    };

    getMsgByChannelId = async (req, res, next) => {    
        const message = await MessageModel.findByChannel({ channel_id: req.params.channelId });
        if (!message.length) {
            throw new MessageException(404, 'Message not found.');
        }

        res.send(message);
    };

    createMessage = async (req, res, next) => {
        this.checkValidation(req);

        const result = await MessageModel.create(req.body);

        if (!result) {
            throw new MessageException(500, 'Something went wrong');
        }

        res.status(201).send(result + ' Message created!');
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new MessageException(400, 'Validation failed', errors);
        }
    }

}

module.exports = new MessageController;