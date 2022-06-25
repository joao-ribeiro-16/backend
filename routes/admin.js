const Admin = require("../model/admin");

exports.createAdmin = (req, res) => {
  const newAdmin = new Admin(req.body);

  newAdmin
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
};

exports.getAdmin = (req, res) => {
  const { id } = req.query;

  Admin.findById(id, function (err, admin) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (admin) return res.status(200).json(admin);
    return res.status(404).json({ message: "Utilizador não encontrado!" });
  });
};

exports.updateAdmin = (req, res) => {
  const { id } = req.body;

  Admin.findByIdAndUpdate(id, req.body, { new: true }, function (err, admin) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (admin) return res.status(200).json(admin);
    return res.status(404).json({ message: "Utilizador não encontrado!" });
  });
};

exports.deleteAdmin = (req, res) => {
  const { id } = req.body;

  Admin.findByIdAndDelete(id, function (err, result) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (result) return res.status(200).json({ message: "Utilizador apagado!" });
    return res.status(404).json({ message: "Utilizador não encontrado!" });
  });
};
