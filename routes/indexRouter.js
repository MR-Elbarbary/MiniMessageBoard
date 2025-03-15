const { Router } = require("express");
const path = require("path");
const { title } = require("process");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

const indexRouter = Router();
indexRouter.get("/", (req, res) =>{
    res.render("index", {
        title:"Mini Messageboard",
        messages: messages})
});

indexRouter.get("/new", (req, res) =>{res.render("new")});

indexRouter.post("/new", (req, res) =>{
    messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    })
    res.redirect("/")
});

module.exports = indexRouter;