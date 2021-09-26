const express = require('express');
const compression = require('compression');
const dotenv = require('dotenv');
const cors = require("cors");
const messageRouter = require('./routes/message.route');
const errorHandlerMiddleware = require('./middleware/errorHandler.middleware');
const MessageException = require('./utils/messageException.utils');

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.options("*", cors());

app.use(compression());

app.use(errorHandlerMiddleware);

const port = Number(process.env.PORT || 3331);

app.use(`/api/v1/message`, messageRouter);

app.all('*', (req, res, next) => {
    const err = new MessageException(404, 'Endpoint Not Found');
    next(err);
});

app.listen(port, () => console.log(`Server running on port ${port}!`));

module.exports = app;