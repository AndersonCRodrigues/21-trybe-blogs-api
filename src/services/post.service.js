const { BlogPost, PostCategory } = require('../models');
const userServie = require('./user.service');
const categoryService = require('./category.service');
const errorGenerate = require('../utils/errorGenerate');
const jwt = require('../utils/auth');

const createRelationship = async (postId, categoryId) => {
  const array = categoryId.map((e) => ({ postId, categoryId: e }));
  await PostCategory.bulkCreate(array);
};

const getUserId = async (token) => {
  const data = jwt.decodeToken(token);
  const user = await userServie.userCheck(data.email);
  return user.dataValues.id;
};

const create = async ({ title, content, categoryIds }, token) => {
  const userId = getUserId(token);

  const categories = await categoryService.getAll();

  const result = categories.map((e) => categoryIds.includes(e.id));
  if (!result.length) throw errorGenerate(400, 'one or more "categoryIds" not found');

  const post = await BlogPost.create({ title, content, userId });
  const postId = post[0].id;
  await createRelationship(postId, categoryIds);
  return post;
};

module.exports = { create };