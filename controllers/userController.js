const User = require("../models/User");

exports.register = function (req, res) {
  let user = new User(req.body);

  user.register();

  if (user.errors.length) {
    res.send(user.errors);
  } else {
    res.send("Congrats!");
  }
};

exports.login = async function (req, res) {
  let user = new User(req.body);
  user
    .login()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      res.send(error);
    });
};
exports.logout = function () {};

exports.home = function (req, res) {
  res.render("home-guest");
};
