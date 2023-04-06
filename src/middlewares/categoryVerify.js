const categorySchema = require('../schemas/category.schema');
const errorGenerate = require('../utils/errorGenerate');

const checkCategoryName = (req, res, next) => {
  const { name } = req.body;
  const { error } = categorySchema.validate({ name });

  if (error) throw errorGenerate(400, error.message);

  next();
};

module.exports = { checkCategoryName };