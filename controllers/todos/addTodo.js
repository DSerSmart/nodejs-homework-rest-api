const { Todo } = require("../../models/todos"); // Используем модель "Todo" из файла todo.js
const { joiSchema } = require("../../models/todos"); // Используем схему "joiSchema" для "todo" из файла todo.js

const addTodo = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }

    const newTodo = await Todo.create(req.body); // Используем модель "Todo" для создания новой записи
    res.status(201).json({
      status: "success",
      code: 201,
      result: newTodo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addTodo;
