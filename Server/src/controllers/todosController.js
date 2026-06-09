const todosSchema = require("../models/todosSchema");

async function getAllTodos(req, res) {
  try {
    const data = await todosSchema.find().sort({ _id: -1 });
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function addTodo(req, res) {
  task = await req.body.task;
  try {
    const data = await todosSchema.create({ task: task });
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function updateTodo(req, res) {
  const { id } = req.params;
  let done = false;
  try {
    const data = await todosSchema.findById({ _id: id });

    if (data) {
      done = data.done;
    }
    const data1 = await todosSchema.findByIdAndUpdate(
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
}

async function deleteTodo(req, res) {
  const { id } = req.params;
  try {
    const data = await todosSchema.findByIdAndDelete({ _id: id });
    if (data) {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

module.exports = { getAllTodos, addTodo, updateTodo, deleteTodo };
