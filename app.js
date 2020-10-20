const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect('mongodb://localhost/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error: ' + err.message);
  });

app.use('/', (req, res)=>{
    res.send("Hello world!");
})
app.listen(3000, () => {
  console.log('Server is up!');
});
