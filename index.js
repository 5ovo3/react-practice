const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/key')

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

const { User } = require('./models/User');

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world !! nodemon');
});

app.post('/register', (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
