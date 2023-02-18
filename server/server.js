const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const db = require('./database/connection');

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/user');
const cohortRoute = require('./routes/cohort');

app.use('/user', userRoute)
app.use('/cohort', cohortRoute)

app.use('*', (err, req, res) => {
    res.status(404).send({ error: err })
})


app.use((err, req, res, next) => {
    console.log(err)
    const defaultErr = {
        log: `err: ${err}`,
        status: 500,
        message: { err: 'error in middleware' }
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    res.status(errorOBj.status).json(errorObj.message);
})

app.listen(PORT, () => (
    console.log(`listening on ${PORT}`)
))

module.exports = app