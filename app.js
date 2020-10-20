const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { param } = require('express-validator');

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
  res.redirect('/messages');
});
//index route
app.get('/messages', (req, res) => {
  Message.find({}, (err, allMessages) => {
    if (err) {
      res.json(err);
    } else {
      res.json(allMessages);
    }
  });
});

// create route
app.post('/messages', (req, res) => {
  let newMessage = {
    email: req.body.email,
    text: req.body.text,
  };
  Message.create(newMessage, (err, newMessage) => {
    if (err) {
      res.json(err.message);
      console.log(err);
    } else {
      res.json(newMessage);
    }
  });
});
//show single route
app.get('/messages/single/:id', (req, res) => {
  Message.findById(req.params.id, (err, foundMessage) => {
    if (err) {
      res.json(err);
    } else {
      res.json(foundMessage);
    }
  });
});
//show list route
app.get('/messages/list/:pageNum([0-9]{3})', (req, res) => {
  Message.find({})
    .skip(req.params.pageNum * 10)
    .limit(10)
    .exec({}, (err, found) => {
      if (err) {
        res.json(err);
      } else {
        res.json(found);
      }
    });
});

//server
app.listen(3000, () => {
  console.log('Server is up!');
});
