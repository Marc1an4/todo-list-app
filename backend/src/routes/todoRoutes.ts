import express from 'express';
import todoController from '../controllers/TodoController';

const router = express.Router();

router.get('/todo', todoController.getAllTodos);

router.get('/todo/5', (_req, res) => {
    res.send('getting to do by id');
});

router.post('/todo', todoController.createTodo);

router.put('/todo/:id', (_req, res) => {
    res.send('updating todo');
});

router.delete('/todo/:id', (_req, res) => {
    res.send('deleting todo');
});

export default router;