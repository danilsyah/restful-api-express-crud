// import library dot environment
require("dotenv").config();
// import librarty body-parser
const bodyParser = require("body-parser");
// import library express
const express = require("express");
// import library CORS
const cors = require("cors");
// object app
const app = express();
// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 3000;
// use cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Service is Running Nodejs Express Restful API");
});

// import route posts
const postsRouter = require("./routes/posts");
app.use("/api/posts", postsRouter);

// run app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
