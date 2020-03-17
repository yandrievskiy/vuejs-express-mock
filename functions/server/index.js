const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const app = express();
const port = 3000;

app.use(cors({origin: true}))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use('/', router);
module.exports = app;