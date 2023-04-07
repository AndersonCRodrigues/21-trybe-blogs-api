const { BlogPost, PostCategory, Category, User } = require('../models');
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
  const userId = await getUserId(token);

  const categories = await categoryService.getAll();

  const ids = categories.map((e) => e.id);
  const result = categoryIds.every((e) => ids.includes(e));
  console.log(result);
  if (!result) throw errorGenerate(400, 'one or more "categoryIds" not found');

  const post = await BlogPost.create({ title, content, userId });
  const postId = post.dataValues.id;
  await createRelationship(postId, categoryIds);
  return post;
};

const getAll = async () => {
  const data = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });

  return data;
};

const getOne = async (id) => {
  const data = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });

  if (!data) throw errorGenerate(404, 'Post does not exist');

  return data;
};

const checkUserId = async (id, token) => {
  const userId = await getUserId(token);
  const result = await getOne(id);

  if (result.userId !== userId) throw errorGenerate(401, 'Unauthorized user');

  return result;
};

const update = async ({ title, content }, id, token) => {
    const result = await checkUserId(id, token);
    result.title = title;
    result.content = content;
    result.updated = new Date();
    result.save();
    return result;
};

const destroy = async (id, token) => {
  await checkUserId(id, token);

  await BlogPost.destroy({ where: { id } });
};

module.exports = { create, getAll, getOne, update, destroy, getUserId };