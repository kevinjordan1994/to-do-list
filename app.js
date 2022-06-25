`use strict`;

const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();
app.set(`view engine`, `ejs`);
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/`, function (req, res) {
  const date = new Date();
  const currentDay = date.getDay();
  const weekDays = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  res.render(`list`, { day: weekDays[currentDay] });
});

app.listen(3000, function () {
  console.log(`Listening in on port 3000`);
});
