const Router = require("express");
const route = Router();
const mongoose = require("mongoose");
const studentlogin = require("../models/student");
const jwt = require("jsonwebtoken");
const cp = require("cookie-parser");
const secret = "mnbvcxzasdfghjklpewq";
const Messages = require("../models/messages");
route.use(cp());


route.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const studentfound = await studentlogin.findOne({ username });
  if (studentfound == null) {
    res.send("User not found");
  } else if (studentfound.password === password) {
    jwt.sign(
      { username, id: studentfound._id, key: studentfound.key },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: studentfound._id,
          username: studentfound.username,
          key: studentfound.key,
        });
      }
    );
  } else {
    res.json("Wrong Credentials.");
  }
});

route.post("/register", async (req, res) => {
  const { username, password, key } = req.body;
  const studentfound = await studentlogin.findOne({ username });
  if (studentfound == null) {
    try {
      await studentlogin
        .create({
          username,
          password,
          key,
          quizScore: 0,
        })
        .then((data) => {
          res.send("User Created");
        });
    } catch (error) {
      res.send("Failed to create user");
      console.log(error);
    }
  } else {
    res.send("user found");
  }
});

route.post("/profile", (req, res) => {
  try {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
      res.json(info);
    });
  } catch (err) {}
});

route.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

module.exports = route;

route.post("/newmessage", async (req, res) => {
  const current = new Date();
  const date1 = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  try {
    await Messages.create({
      message: req.body.message,
      sendby: req.body.sendby,
      date:date1,
    })
  } catch (err) {
    console.log(err);
  }
  
});

route.get("/allmessages", async (req, res) => {
  try {
    const allmessages = await Messages.find({});
    res.send(allmessages);
  } catch (err) {
    console.log(err);
  }
});

route.post("/deletmessage", async (req, res) => {
  try {
    await Messages.deleteOne({_id:req.body._id}) 
    const allmessages = await Messages.find({});
    res.send(allmessages);
  } catch (err) {
    console.log(err);
  }
});

