const express = require('express');
const advertisementRouter = express.Router();

advertisementRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the advertisements to you');
})
.post((req, res) => {
    res.end(`Will add the advertisement: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /advertisements');
})
.delete((req, res) => {
    res.end('Deleting all advertisements');
});

advertisementRouter.route('/:advertisementId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the advertisement: ${req.params.advertisementId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /advertisements/${req.params.advertisementId}`);
})
.put((req, res) => {
    res.write(`Updating the advertisement: ${req.params.advertisementId}\n`);
    res.end(`Will update the advertiement: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting advertisement: ${req.params.advertisementId}`);
});

module.exports = advertisementRouter;
