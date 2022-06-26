`use strict`;

module.exports.getDate = function () {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
