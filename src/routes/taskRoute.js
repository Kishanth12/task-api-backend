import express from 'express'
import { addTask, deleteTask, getTask, taskInfo } from '../controllers/taskController.js'
import { taskValidator } from '../validators/taskValidator.js'

const taskRouter = express.Router()

taskRouter.post('/tasks',taskValidator,addTask)
taskRouter.get('/tasks',getTask)
taskRouter.get('/tasks/:id',taskInfo)
taskRouter.delete('/tasks/:id',deleteTask)

export default taskRouter;