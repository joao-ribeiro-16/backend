const port = process.env.PORT || 4000;

const mongoose = require("mongoose");

const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("./routes/user");

const {
  createAdmin,
  getAdmin,
  deleteAdmin,
  updateAdmin,
} = require("./routes/admin");

const { login } = require("./routes/common");

const {
  createPlan,
  getPlan,
  updatePlan,
  deletePlan,
  getPlans,
  getPlansByType,
} = require("./routes/plan");

const {
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkouts,
} = require("./routes/workout");

app.post("/user", createUser);
app.get("/user", getUser);
app.put("/user", updateUser);
app.delete("/user", deleteUser);
app.get("/users", getUsers);
/////////////////////////////////////////////////
app.post("/admin", createAdmin);
app.get("/admin", getAdmin);
app.put("/admin", updateAdmin);
app.delete("/admin", deleteAdmin);
///////////////////////////////////////////////
app.post("/login", login);
//////////////////////////////////////////////
app.post("/plan", createPlan);
app.get("/plan", getPlan);
app.put("/plan", updatePlan);
app.delete("/plan", deletePlan);
app.get("/plans", getPlans);
app.get("/plans/:type", getPlansByType);
/////////////////////////////////////////////
app.post("/workout", createWorkout);
app.get("/workout", getWorkout);
app.put("/workout", updateWorkout);
app.delete("/workout", deleteWorkout);
app.get("/workouts/:userId", getWorkouts);

mongoose.connect(
  "mongodb+srv://joaoribeiro_16:!CMnsi!4RrsHfmL@cluster0.6scer.mongodb.net/pap?retryWrites=true&w=majority"
);

app.listen(port, () =>
  console.log(`Aplicação Backend a correr na porta ${port} !`)
);
