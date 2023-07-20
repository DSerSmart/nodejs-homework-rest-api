const express = require("express");
const router = express.Router();

const getAllTodos = require("../../controllers/todos/getAllTodos"); // Импортируем контроллер для получения всех "todo"
const getTodoById = require("../../controllers/todos/getTodoById"); // Импортируем контроллер для получения "todo" по идентификатору
const addTodo = require("../../controllers/todos/addTodo"); // Импортируем контроллер для добавления "todo"
const updateTodoById = require("../../controllers/todos/updateTodoById"); // Импортируем контроллер для обновления "todo" по идентификатору
const deleteTodo = require("../../controllers/todos/deleteTodo"); // Импортируем контроллер для удаления "todo"

// =====================  GET ALL TODOS  =====================
router.get("/", getAllTodos);

// =====================  GET TODO BY ID  =====================
router.get("/:todoId", getTodoById);

// =====================  ADD TODO  =====================
router.post("/", addTodo);

// =====================  UPDATE TODO BY ID  =====================
router.put("/:todoId", updateTodoById);

// =====================  DELETE TODO BY ID  =====================
router.delete("/:todoId", deleteTodo);

module.exports = router;
