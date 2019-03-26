const Sequelize = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define('user', {
    nickname: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
}, {
    tableName: 'users'
});

User.sync()

module.exports = User;