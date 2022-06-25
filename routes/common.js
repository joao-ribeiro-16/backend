const User = require("../model/user");
const Admin = require("../model/admin");

exports.login = (req, res) => {
  const { isAdmin, email, password } = req.body;

  if (isAdmin) {
    Admin.findOne({ email }, function (err, admin) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      if (admin && admin.password === password)
        return res.status(200).json(admin);

      return res.status(404).json({ message: "Utilizador não encontrado!" });
    });
  } else {
    User.findOne({ email }, function (err, user) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      if (user && user.password === password) return res.status(200).json(user);
      return res.status(404).json({ message: "Utilizador não encontrado!" });
    });
  }
};
