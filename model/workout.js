const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  idUser: {
    type: String,
    required: [true, "Campo obrigatório"],
  },
  idPlan: {
    type: String,
    required: [true, "Campo obrigatório"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  completedDays: {
    type: Number,
    default: 0,
    min: [0, "Mínimo 1 dia de treino"],
    max: [365, "Máximo 365 dias de treino"],
  },
  finished: {
    type: Boolean,
    default: false,
  },
  keyWord: {
    type: String,
    required: [true, "Campo obrigatório"],
  },
  namePlan: {
    type: String,
    required: [true, "Campo obrigatório"],
  },
});

const workoutModel = mongoose.model("workout", workoutSchema);
module.exports = workoutModel;
