// import libraries
require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express');

// object app
const app = express();
// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Service is Running Nodejs Express Restful API');
})

// import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

