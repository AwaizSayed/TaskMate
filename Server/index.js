const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./src/config/db");
const TodoModel = require("./src/models/todosSchema");
const route = require("./src/routers/todosRouter");

app.use(cors({ origin: [process.env.NODE_FRONTEND_URL] }));

app.use(express.json());

connectToDB();

app.use("/todo", route);

app.get("/", (req, res) => {
  console.log("Things are working");
  res.send("<h1 style='text-align:center'>TaskMate Backend is Running</h1>");
});

app.listen(3002, () => {
  console.log("Listening");
});

//---bin---
/*
.then((result) => res.json(result))
      .catch((err) => res.json(err));

const data = await TodoModel.find()
    .sort({ _id: -1 })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));

  //console.log(id);

  // console.log(done);
  .then((result) => res.json(result))
      .catch((err) => res.json(err));

      .then((result) => res.json(result))
    .catch((err) => res.json(err));
    app.post("/add", async (req, res) => {
  task = await req.body.task;
  try {
    const data = await TodoModel.create({ task: task });
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    const data = await TodoModel.find().sort({ _id: -1 });
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  let done = false;
  try {
    const data = await TodoModel.findById({ _id: id });

    if (data) {
      done = data.done;
    }
    const data1 = await TodoModel.findByIdAndUpdate(
      { _id: id },
      { done: done ? false : true },
    );
    if (data1) {
      res.json(data1);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await TodoModel.findByIdAndDelete({ _id: id });
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});


*/
