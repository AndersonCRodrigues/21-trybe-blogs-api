const postSchema = require('../schemas/post.schema');
const errorGenerate = require('../utils/errorGenerate');

const checkPostCreate = (req, _res, next) => {
  const data = req.body;
  const { error } = postSchema.validate(data);
  if (error) throw errorGenerate(400, error.message);

  next();
};

module.exports = { checkPostCreate };