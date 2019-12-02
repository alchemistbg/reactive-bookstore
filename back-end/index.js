const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

require('./config/database')();

const genresRouter = require('./routes/genres');
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/routes/genres', genresRouter);
app.use('/routes/orders', ordersRouter);
app.use('/routes/books', booksRouter);
app.use('/routes/users', usersRouter);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
    next();
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});