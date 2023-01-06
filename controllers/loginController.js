//js

const path = require("path");

//For Register Page
const registerView = (req, res) => {
  res.render("register", {});
};
// For View
const loginView = (req, res) => {
  //res.render("login", {});
  res.sendFile(path.join(__dirname, "../public", "/login.html"));
};
module.exports = {
  registerView,
  loginView,
};
