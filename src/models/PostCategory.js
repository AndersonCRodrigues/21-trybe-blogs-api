/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {type: DataTypes.INTEGER, primaryKey: true },
    categoryId: {type: DataTypes.INTEGER, primaryKey: true },
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  PostCategoryTable.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog-posts',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    })

    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    })
  }



  return PostCategoryTable;
}