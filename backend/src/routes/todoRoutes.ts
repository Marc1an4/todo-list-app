import express from 'express';
import todoController from '../controllers/TodoController';

const router = express.Router();

router.get('/todo', todoController.getAllTasks);
router.get('/todo/:id', todoController.getTaskById);
router.post('/todo', todoController.createTask);
router.put('/todo/:id', todoController.updateTask);
router.delete('/todo/:id', todoController.deleteTask);

export default router;