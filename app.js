const express = require('express');
const indexRouter = require('./routes/index');
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));




app.use('/', indexRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
  });