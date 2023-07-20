const { Todo } = require("../../models/todos"); // Используем модель "Todo" из файла todo.js
const { joiSchema: todoJoiSchema } = require("../../models/todos"); // Используем схему "todoJoiSchema" для "todo" из файла todo.js

const updateTodoById = async (req, res, next) => {
  try {
    const { error } = todoJoiSchema.validate(req.body); // Обновляем на "todoJoiSchema"
    if (error) {
      error.status = 400;
      throw error;
    }

    const id = req.params.todoId; // Обновляем параметр на "todoId"

    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // Обновляем на "Todo"

    if (!updatedTodo) {
      const error = new Error(`Todo with this id: ${id} is not found`);
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      result: updatedTodo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateTodoById; // Обновляем экспорт на "updateTodoById"
