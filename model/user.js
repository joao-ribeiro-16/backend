const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Campo obrigatório"],
    unique: [true, "Este email já existe"],
    validate: {
      validator: function (email) {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      },
      message: (props) => `${props.value} não é válido!`,
    },
  },
  password: {
    type: String,
    required: [true, "Campo obrigatório"],
  },
  createdAt: { type: Date, default: Date.now },
  numberOfWorkouts: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE"],
  },
  goals: {
    type: String,
    enum: ["LOSE_WEIGHT", "GAIN_MUSCLES", "KEEP_SHAPE"],
  },
  age: {
    type: Number,
    min: [16, "Idade mínima 16 anos"],
    max: [80, "Idade máxima 80 anos"],
  },
  weight: {
    type: Number,
    min: [30, "Peso mínimo 30 kg"],
    max: [150, "Peso máximo 150 kg"],
  },
  height: {
    type: Number,
    min: [100, "Altura mínima 100 cm"],
    max: [250, "Altura máxima 250 cm"],
  },
  name: {
    type: String,
  },
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
