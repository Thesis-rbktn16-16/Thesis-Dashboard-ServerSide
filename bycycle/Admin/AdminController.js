var Auth = require("../Authentication/Auth");
var Bycycle = require("../Bycycle");
exports.createAdmin = (req, res) => {
  let { User, Password, Email } = req.body.RegisterAdmin;
  Auth.HashPass(req.body.RegisterAdmin.Password).then((Hashed) => {
    Bycycle.AdminModel.create({ User, Password: Hashed, Email })
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  });
};

exports.CheckIfThePassRight = (req, res) => {
  let { Username, Pass } = req.body.LoginAdmin;

  Bycycle.AdminModel.findOne({ Username: Username }, (err, result) => {
    let Pass = req.body.LoginAdmin.LoginPassword;
    let UserNameFromDataBase = req.body.LoginAdmin.Username;
    if (UserNameFromDataBase === Username) {
      let hashedPass = result.Password;

      Auth.comparePass(Pass, hashedPass).then((r) => {
        if (r) {
          res.status(201).send(req.body.LoginAdmin);
        } else {
          res.status(404).send(err);
        }
      });
    } else if (err) {
      res.status(500).send(err);
    }
  });
};
