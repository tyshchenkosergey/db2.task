const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//models
const Message = require('./models/message');

//routes
const indexRoutes = require('./routes/index.js');
const messageRoutes = require('./routes/message.js');

mongoose
  .connect('mongodb://localhost/chat', {
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

app.use(indexRoutes);
app.use(messageRoutes);

//server
app.listen(3000, () => {
  console.log('Server is up!');
});
