var Auth = require("../Authentication/Auth");
var Bycycle = require("../Bycycle");
exports.createAdmin = (req, res) => {
  console.log("---------------", req.body);

  let { User, Password, Email } = req.body.RegisterAdmin;
  Auth.HashPass(req.body.RegisterAdmin.Password).then((Hashed) => {
    console.log(Hashed);
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
  let { User, Password } = req.body.LoginAdmin;

  Bycycle.AdminModel.findOne({ User: User }, (err, result) => {
    let hashedPass = result.Password;
    let UserNameFromDataBase = result.User;

    if (UserNameFromDataBase === User) {
      Auth.comparePass(Password, hashedPass).then((r) => {
        if (r) {
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
