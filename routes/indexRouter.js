const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
});

indexRouter.get("/:messageID", (req, res) => {
  res.send(`Message ID is ${req.params.messageID}`);
});

module.exports = indexRouter;
