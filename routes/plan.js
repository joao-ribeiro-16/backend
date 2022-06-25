const Plan = require("../model/plan");

exports.createPlan = (req, res) => {
  const newPlan = new Plan(req.body);

  newPlan
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
};

exports.getPlan = (req, res) => {
  const { id } = req.query;

  Plan.findById(id, function (err, plan) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (plan) return res.status(200).json(plan);
    return res.status(404).json({ message: "Plano não encontrado!" });
  });
};

exports.updatePlan = (req, res) => {
  const { id } = req.body;

  Plan.findByIdAndUpdate(id, req.body, { new: true }, function (err, plan) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (plan) return res.status(200).json(plan);
    return res.status(404).json({ message: "Plano não encontrado!" });
  });
};

exports.deletePlan = (req, res) => {
  const { id } = req.body;

  Plan.findByIdAndDelete(id, function (err, result) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (result) return res.status(200).json({ message: "Plano apagado!" });
    return res.status(404).json({ message: "Plano não encontrado!" });
  });
};

exports.getPlans = (req, res) => {
  const { skip } = req.query;

  Plan.find(
    null,
    null,
    { skip, limit: 10, sort: { createdAt: "desc" } },
    function (err, results) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      return res.status(200).json(results);
    }
  );
};

exports.getPlansByType = (req, res) => {
  const { skip } = req.query;
  const { type } = req.params;

  Plan.find(
    { typeWorkout: type },
    null,
    { skip, limit: 10, sort: { createdAt: "desc" } },
    function (err, results) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      return res.status(200).json(results);
    }
  );
};
