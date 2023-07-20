const createError = require("http-errors");
const { Todo } = require("../../models/todos"); // Используем модель "Todo" из файла todo.js

const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.todoId; // Обновляем параметр на "todoId"
    const removedTodo = await Todo.findByIdAndRemove(id); // Обновляем на "Todo"

    if (!removedTodo) {
      throw new createError.NotFound(`Todo with this id: ${id} is not found`);
    }
    res.json({
      status: "success",
      message: "todo deleted",
      code: 200,
      result: { removedTodo },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTodo; // Обновляем экспорт на "deleteTodo"
