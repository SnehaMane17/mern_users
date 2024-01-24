const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userModel = require('./models/Users')
const cors = require('cors')

mongoose.connect('mongodb+srv://mongoUser123:mongoUserPassword123@cluster0.qcznojm.mongodb.net/socialMedia')
app.use(express.json())
app.use(cors())

app.get('/getUsers', (req, res) => {
  userModel.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/createUser', async(req, res) => {
  const user = req.body
  const newUser = new userModel(user);
  await newUser.save()
  res.json(user)
})


app.listen('3001', () => {
    console.log("SERVER IS RUNNING")
})