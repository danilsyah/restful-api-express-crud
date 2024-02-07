require("dotenv").config();

const express = require('express');
const app = express();
// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Service is Running Nodejs Express Restful API');
})

// import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

