const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/todos");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

async function connectIt() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
}

connectIt();

app.get("/", async (req, res) => {
  console.log("Things are working");
  res.send("TaskMate Backend is running...");
});

app.post("/add", async (req, res) => {
  task = await req.body.task;
  await TodoModel.create({ task: task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", async (req, res) => {
  await TodoModel.find()
    .sort({ _id: -1 })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  let done = false;
  await TodoModel.findById({ _id: id })
    .then((result) => {
      done = result.done;
    })
    .catch((err) => console.log(err));
  // console.log(done);

  await TodoModel.findByIdAndUpdate({ _id: id }, { done: done ? false : true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  await TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3002, async () => {
  console.log("Listening");
});
