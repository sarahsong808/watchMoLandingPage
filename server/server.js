const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/assets')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('*', (req, res) => {
    res.sendStatus(404);
});


// global error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(400);
    res.render('error', { error: err });
}

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
});

module.exports = app;

