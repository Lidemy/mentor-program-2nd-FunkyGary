const Sequelize = require("sequelize");
const sequelize = require("./db");

const Post = sequelize.define('post', {
    user_id: {
        type: Sequelize.STRING
    },
    parent_id: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
}, {
    tableName: 'posts'
});

Post.sync()

module.exports = Post;