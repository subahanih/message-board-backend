const NodeCache = require("node-cache")

const cache = new NodeCache();

/*
    is request a GET?
    if not, call next
    check if key exists in cache
    if it exists, send cache result
    if not, replace .send with method to set response to cache
*/
module.exports = duration => (req, res, next) => {
    
    if(req.method !== 'GET') {
        console.error('Cannot cache non-GET methods!');
        return next();
    }

    const key = req.originalUrl;
    const cacheResponse = cache.get(key);

    if(cacheResponse) {
        console.log(`Cache hit for ${key}`);
        res.send(cacheResponse);
    } else {
        console.log(`Cache miss for ${key}`);
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration);
        };
        next();
    }
};