const Sequelize = require('sequelize')
const database = require('./database')
const Student = database.define("student", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stream: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Student;