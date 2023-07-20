const {
  Contact,
  joiSchema: contactJoiSchema,
  favoriteJoiSchema: contactFavoriteJoiSchema,
} = require("./contacts");
const { Todo, joiSchema: todoJoiSchema } = require("./todos");

module.exports = {
  Contact,
  contactJoiSchema,
  contactFavoriteJoiSchema,
  Todo,
  todoJoiSchema,
};
