const createError = require("http-errors");
const { Todo } = require("../../models/todos"); // Используем модель "Todo" из файла todo.js

const getTodoById = async (req, res, next) => {
  try {
    const id = req.params.todoId; // Обновляем параметр на "todoId"

    const todoByID = await Todo.findById(id); // Обновляем на "Todo"

    if (!todoByID) {
      throw new createError.NotFound(`Todo with this id: ${id} is not found`);
    }
    res.json({
      status: "success",
      code: 200,
      result: { todoByID }, // Обновляем на "todoByID"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTodoById; // Обновляем экспорт на "getTodoById"
