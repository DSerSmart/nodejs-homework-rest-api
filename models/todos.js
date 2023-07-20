const { Schema, model } = require("mongoose");
const Joi = require("joi");

// Mongoose Schema
const todoSchema = Schema(
  {
    _id: {
      type: String,
    },
    text: {
      type: String,
      required: [true, "Set text for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

// Mongoose Model
const Todo = model("todo", todoSchema);

// JOI Schema
const joiSchema = Joi.object({
  _id: Joi.string().required(),
  text: Joi.string().required(),
});

module.exports = { Todo, joiSchema };
