var Auth = require("../Authentication/Auth");
var Bycycle = require("../Bycycle");
exports.createAdmin = (req, res) => {
  console.log("---------------", req.body);

  let { User, Password, Email } = req.body.RegisterAdmin;
  Auth.HashPass(req.body.RegisterAdmin.Password).then((Hashed) => {
    console.log("HASHEDDDD", Hashed);
    Bycycle.AdminModel.create({ User, Password: Hashed, Email })
      .then((result) => {
        console.log(result);
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
    console.log("ressss", result);
    let Pass = req.body.LoginAdmin.LoginPassword;
    console.log("PASS", Pass);
    let UserNameFromDataBase = req.body.LoginAdmin.Username;
    console.log("loginAdmin", Username);
    console.log("UserNameFromDataBase", UserNameFromDataBase);

    if (UserNameFromDataBase === Username) {
      let hashedPass = result.Password;
      console.log("dataUser", UserNameFromDataBase);
      console.log("hashed password", result.Password);

      Auth.comparePass(Pass, hashedPass).then((r) => {
        console.log("rrr", Pass);
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
