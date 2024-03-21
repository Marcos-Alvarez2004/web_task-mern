import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post(
  "/task",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);

export default router;
