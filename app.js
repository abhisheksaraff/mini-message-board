const express = require("express");
const app = express();

const path = require("node:path");

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use(express.urlencoded({ extended: true })); // required to parse the form data into req.body to read form data

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
