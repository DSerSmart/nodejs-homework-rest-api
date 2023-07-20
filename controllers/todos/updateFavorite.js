const { Todo } = require("../../models/todo"); // Используем модель "Todo" из файла todo.js
const { favoriteJoiSchema } = require("../../models/todo"); // Используем схему "favoriteJoiSchema" для "todo" из файла todo.js

const updateTodoStatus = async (req, res, next) => {
  try {
    const id = req.params.todoId; // Обновляем параметр на "todoId"
    const favorite = req.body.favorite;

    if (!favorite) {
      res.status(400).json({
        message: "missing field favorite",
      });
    }

    const { error } = favoriteJoiSchema.validate(req.body); // Обновляем на "favoriteJoiSchema"
    if (error) {
      error.status = 400;
      throw error;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { favorite }, // Обновляем на "Todo"
      { new: true }
    );

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

module.exports = updateTodoStatus; // Обновляем экспорт на "updateTodoStatus"
