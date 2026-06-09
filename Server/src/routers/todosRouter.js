const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todosController");

router.get("/get-todos", getAllTodos);
router.post("/add-todo", addTodo);
router.put("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;
