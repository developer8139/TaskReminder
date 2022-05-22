const express = require('express');
const cors = require('cors');
const app = express();
const Task = require('../backend/models/TaskListModel');
const port = process.env.PORT || 9100;

app.use(cors());
app.use(express.json());

app.post('/tasks', async (req, res) => {
    const {name, time} = req.body;

    if(isNaN(name)) {
        const task = await new Task({name, time});
        return res.send("Task saved.")
    }

    return res.status(404, "Error!!")

})


app.listen(port, 'localhost', () => {
    console.log(`Listening on port ${port}`)
})
