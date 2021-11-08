var Auth = require("../Authentication/Auth");
var Bycycle = require("../Bycycle");
//
exports.createAdmin = (req, res) => {
  console.log(req.body);
  let { User, Password, Email } = req.body;
  Auth.HashPass(Password).then((Hashed) => {
    Bycycle.AdminModel.create({ User, Password: Hashed, Email })
      .then((result) => {
        console.log("result", result);
        res.sendStatus(201);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  });
};

exports.CheckIfThePassRight = (req, res) => {
  let { User, Password } = req.body;

  Bycycle.AdminModel.findOne({ User: User }, (err, result) => {
    let hashedPass = result.Password;
    let UserNameFromDataBase = result.User;

    if (UserNameFromDataBase === User) {
      Auth.comparePass(Password, hashedPass).then((bool) => {
        if (bool) {
          res.status(201).send(result);
        } else {
          res.status(404).send(err);
        }
      });
    } else if (err) {
      res.status(500).send(err);
    }
  });
};
