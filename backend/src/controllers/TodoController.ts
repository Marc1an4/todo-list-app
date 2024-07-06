import { Request, Response } from 'express';
import { TodoService } from '../services/TodoService';

const todoService = new TodoService();

export class TodoController {
    public async getAllTodos(_req: Request, res: Response): Promise<void> {
        try {
          const todos = await todoService.getAllTodos();
          res.json(todos);
        } catch (error) {
          res.status(500).json({ error: 'Error getting tasks' });
        }
    }

    public async createTodo(req: Request, res: Response): Promise<void> {
      try {
        const { title, description, completed } = req.body;
        const newTodo = await todoService.createTodo({ title, description, completed });
        res.json(newTodo);
      } catch (error) {
        res.status(500).json({ error: 'Error al crear una nueva tarea' });
      }
    } 
}

const todoController = new TodoController();
export default todoController;