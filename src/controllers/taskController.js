import Task from "./../models/taskModel.js";

export const addTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const task = new Task({
      title,
      description,
      status,
    });
    const newTask = await task.save();
    res
      .status(201)
      .json({ success: true, message: "taskCreated Successfully", newTask });
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const taskInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      const err = new Error("Task not Found");
      err.statusCode = 404;
      return next(err);
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      const err = new Error("Task not Found");
      err.statusCode = 404;
      return next(err);
    }
    await task.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};
