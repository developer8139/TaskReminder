const {Sequelize} = require('sequelize');
const sequelize = new Sequelize();


const Task = sequelize.define('Task', {
    name: {
        type: STRING
    }
})


export default Task;