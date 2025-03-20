import express from "express";
import {
  createTask,
  deleteTask,
  getSingleTasks,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import protect from "../middlewares/auth.middleware.js";

const taskRouter = express.Router();

taskRouter.get("/", protect, getTasks);
taskRouter.get("/:id", protect, getSingleTasks);
taskRouter.post("/", protect, createTask);
taskRouter.patch("/:id", protect, updateTask);
taskRouter.delete("/:id", protect, deleteTask);

export default taskRouter;
