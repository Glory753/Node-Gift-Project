const express = require('express');
const morgan = require('morgan');
const giftcardRouter = require('./routes/giftcardRouter');
const advertisementRouter = require('./routes/advertisementRouter');

const hostname = 'localhost';
const port = 3001;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/giftcards', giftcardRouter);

app.use('/advertisements', advertisementRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is a Glory Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});