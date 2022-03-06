const express = require('express');
const app = express();
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://5ovo3:5ovo3@cluster0.orols.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world dd');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
