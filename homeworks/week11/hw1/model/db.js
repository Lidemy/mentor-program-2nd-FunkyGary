const Sequelize = require("sequelize");

const sequelize = new Sequelize('mentor_node.js', 'root', '', {
    host: "localhost",
    dialect: 'mysql',
});

sequelize.authenticate().then(function() {
    console.log("sucess");
}).catch(function(error) {
    console.log("error: " + error);
});

module.exports = sequelize