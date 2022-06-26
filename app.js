`use strict`;

const express = require(`express`);
const bodyParser = require(`body-parser`);
const { render } = require("ejs");
const date = require(__dirname + "/date.js");

const items = [];
const workItems = [];

const app = express();
app.set(`view engine`, `ejs`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get(`/`, function (req, res) {
  const day = date.getDate();
  res.render(`list`, { listTitle: day, items: items });
});

app.get(`/work`, function (req, res) {
  res.render(`list`, { listTitle: "Work List", items: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/", function (req, res) {
  const { newItem } = req.body;
  if (req.body.list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log(`Listening in on port 3000`);
});
