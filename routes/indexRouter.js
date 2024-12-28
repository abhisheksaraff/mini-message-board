const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getMessageByID(messageID) {
  return messages.find((message) => message.id === messageID);
}

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
});

indexRouter.get("/:messageID", (req, res) => {
  res.render("details", getMessageByID(Number(req.params.messageID)));
});

module.exports = indexRouter;
