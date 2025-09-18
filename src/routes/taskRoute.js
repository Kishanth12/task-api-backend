import express from 'express'

const taskRouter = express.Router()

taskRouter.post('/tasks')
taskRouter.get('/tasks')
taskRouter.get('/tasks/:id')
taskRouter.delete('/tasks/:id')