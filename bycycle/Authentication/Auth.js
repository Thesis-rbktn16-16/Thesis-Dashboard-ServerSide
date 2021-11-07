const bcrypt = require("bcrypt");

exports.HashPass = (passwordFromClient, saltRound = 10) => {
  return bcrypt.hash(passwordFromClient, saltRound);
};

exports.comparePass = (passwordFromClient, passwordHashed) => {
  return bcrypt.compare(passwordFromClient, passwordHashed);
};
