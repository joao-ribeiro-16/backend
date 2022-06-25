const Workout = require("../model/workout");

exports.createWorkout = (req, res) => {
  const newWorkout = new Workout(req.body);

  newWorkout
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => res.status(500).json(error));
};

exports.getWorkout = (req, res) => {
  const { id } = req.query;

  Workout.findById(id, function (err, workout) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (workout) return res.status(200).json(workout);
    return res.status(404).json({ message: "Treino não encontrado!" });
  });
};

exports.updateWorkout = (req, res) => {
  const { id } = req.body;

  Workout.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    function (err, workout) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      if (workout) return res.status(200).json(workout);
      return res.status(404).json({ message: "Treino não encontrado!" });
    }
  );
};

exports.deleteWorkout = (req, res) => {
  const { id } = req.body;

  Workout.findByIdAndDelete(id, function (err, result) {
    if (err) return res.status(500).json({ message: "Algo correu mal!" });
    if (result) return res.status(200).json({ message: "Treino apagado!" });
    return res.status(404).json({ message: "Treino não encontrado!" });
  });
};

exports.getWorkouts = (req, res) => {
  const { skip } = req.query;
  const { userId } = req.params;

  Workout.find(
    { userId },
    null,
    { skip, limit: 10, sort: { updatedAt: "desc" } },
    function (err, results) {
      if (err) return res.status(500).json({ message: "Algo correu mal!" });
      return res.status(200).json(results);
    }
  );
};
