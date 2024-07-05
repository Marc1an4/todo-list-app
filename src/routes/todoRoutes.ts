import express from 'express';
import todoController from '../controllers/TodoController';

const router = express.Router();

router.get('/todo', (_req, res) => {
    res.send('getting todos');
});

router.get('/todo/:id', (_req, res) => {
    res.send('getting to do by id');
});

router.post('/todo', (_req, res) => {
    res.send('saving todos');
});

router.put('/todo/:id', (_req, res) => {
    res.send('updating todo');
});

router.delete('/todo/:id', (_req, res) => {
    res.send('deleting todo');
});

export default router;