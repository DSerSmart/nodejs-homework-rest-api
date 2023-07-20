const { Todo } = require("../../models/todos"); // Используем модель "Todo" из файла todo.js

const getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({}); // Обновляем на "Todo"
    res.json({
      status: "success",
      code: 200,
      todos, // Обновляем на "todos"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllTodos; // Обновляем экспорт на "getAllTodos"
