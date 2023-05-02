const express = require('express');
const app = express();
const bp = require('body-parser')
const cookieParser = require('cookie-parser')


const port = process.env.PORT || 3001;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cookieParser());


require('./startup/cors')(app);
require('./startup/routes')(app);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = {app, server};