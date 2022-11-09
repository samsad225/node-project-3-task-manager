const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}= require('/home/pi/Downloads/node-express-course-main/controllers/task.js')
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router