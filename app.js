const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

//routes
const messageRoutes = require('./routes/message.js');

const db = process.env.DATABASE_URL || 'mongodb://localhost/chat';
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error: ' + err.message);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(messageRoutes);

//server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server is up!');
});
