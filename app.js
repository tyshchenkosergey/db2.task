const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//models
const Message = require('./models/message');

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

//landing route
app.get('/', (req, res) => {
  res.render('landing.ejs');
});
//index route
app.get('/messages', (req, res) => {
  Message.find({}, (err, allMessages) => {
    if (err) {
      console.log('Error: ' + err);
    } else {
      res.render('index.ejs', { messages: allMessages });
    }
  });
});
//new route
app.get('/messages/new', (req, res) => {
  res.render('new.ejs');
});
// create route
app.post('/messages', (req, res) => {
  let newMessage = {
    email: req.body.email,
    text: req.body.text,
  };
  Message.create(newMessage, (err, newMessage) => {
    if (err) {
      console.log('Error: ' + err);
      res.redirect('/messages/new');
    } else {
      res.redirect('/messages');
    }
  });
});

//server
app.listen(3000, () => {
  console.log('Server is up!');
});
