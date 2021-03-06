const express = require('express');
const giftcardRouter = express.Router();

giftcardRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the giftcards to you');
})
.post((req, res) => {
    res.end(`Will add the giftcard: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /giftcards');
})
.delete((req, res) => {
    res.end('Deleting all giftcards');
});

giftcardRouter.route('/:giftcardId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the giftcard: ${req.params.giftcardId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /giftcards/${req.params.giftcardId}`);
})
.put((req, res) => {
    res.write(`Updating the giftcard: ${req.params.giftcardId}\n`);
    res.end(`Will update the giftcard: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting giftcard: ${req.params.giftcardId}`);
});

module.exports = giftcardRouter;