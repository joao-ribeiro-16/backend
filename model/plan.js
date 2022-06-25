const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  namePlan: {
    type: String,
    required: [true, "Campo obrigatório"],
    unique: [true, "Este nome já existe"],
  },
  numberDays: {
    type: Number,
    required: [true, "Campo obrigatório"],
    min: [1, "Mínimo 1 dia de treino"],
    max: [365, "Máximo 365 dias de treino"],
  },
  keyWord: {
    type: String,
    required: [true, "Campo obrigatório"],
  },
  typeWorkout: {
    type: String,
    enum: ["LOSE_WEIGHT", "GAIN_MUSCLES", "KEEP_SHAPE"],
    required: [true, "Campo obrigatório"],
  },
  exercises: [
    [
      {
        idExercise: String,
        nameExercise: String,
        durationExercise: Number,
      },
    ],
  ],
  createdAt: { type: Date, default: Date.now },
});

const planModel = mongoose.model("plan", planSchema);
module.exports = planModel;
