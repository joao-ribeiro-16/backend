const User = require("../model/user");

exports.createUser = (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
};

exports.getUser = (req, res) => {
  const { id } = req.query;

  User.findById(id, function (err, user) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (user) return res.status(200).json(user);
    return res.status(404).json({ message: "Utilizador não encontrado!" });
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.body;

  User.findByIdAndUpdate(id, req.body, { new: true }, function (err, user) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (user) return res.status(200).json(user);
    return res.status(404).json({ message: "Utilizador não encontrado!" });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.body;

  User.findByIdAndDelete(id, function (err, result) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (result) return res.status(200).json({ message: "Utilizador apagado!" });
    return res.status(404).json({ message: "Utilizador não encontrado!" });
  });
};

exports.getUsers = (req, res) => {
  const { skip } = req.query;

  User.find(
    null,
    null,
    { skip, limit: 10, sort: "createdAt" },
    function (err, results) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      return res.status(200).json(results);
    }
  );
};
