const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const axios = require('axios');
require('dotenv').config();

const app = express();

  // app.use(bodyParser.json());
  // app.use(express.static(path.join(__dirname, "public")));
  // app.use('/', indexRouter);

  app.use(express.static(path.join(__dirname, 'public')))

  app.use("/api",indexRouter)

  app.get("/", (req,res)=>{
    
  })


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
  });