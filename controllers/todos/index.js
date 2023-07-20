const addTodo = require("./addTodo"); // Импортируем функцию для добавления "todo"
const deleteTodo = require("./deleteTodo"); // Импортируем функцию для удаления "todo"
const getAllTodos = require("./getAllTodos"); // Импортируем функцию для получения всех "todo"
const getTodoById = require("./getTodoById"); // Импортируем функцию для получения "todo" по идентификатору
const updateTodoById = require("./updateTodoById"); // Импортируем функцию для обновления "todo" по идентификатору

module.exports = {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodoById,
};
