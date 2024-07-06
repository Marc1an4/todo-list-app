import { Request, Response } from 'express';
import { TodoService } from '../services/TodoService';

const todoService = new TodoService();

export class TodoController {
    public async getAllTasks(_req: Request, res: Response): Promise<void> {
        try {
          const todos = await todoService.getAllTasks();
          res.json(todos);
        } catch (error) {
          res.status(500).json({ error: 'Error getting tasks' });
        }
    }

    public async getTaskById(req: Request, res: Response): Promise<void> {
      try {
        const { id } = req.params;
        const task = await todoService.getTaskById(Number(id));
  
        if (task) res.json(task);
        else res.status(404).json({ error: 'Task not found' });

      } catch (error) {
        res.status(500).json({ error: 'Error getting task' });
      }
    }

    public async createTask(req: Request, res: Response): Promise<void> {
      try {
        const { title, description, completed } = req.body;
        const newTask = await todoService.createTask({ title, description, completed });
        res.json(newTask);
      } catch (error) {
        res.status(500).json({ error: 'Error creating new task' });
      }
    } 

    public async updateTask(req: Request, res: Response): Promise<void> {
      try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const [, updatedTasks] = await todoService.updateTask(Number(id), { title, description, completed });
  
        if (updatedTasks.length > 0) res.json(updatedTasks[0]);
        else res.status(404).json({ error: 'Task not found or could not be updated' });
        
      } catch (error) {
        res.status(500).json({ error: 'Error updating task' });
      }
    }

    public async deleteTask(req: Request, res: Response): Promise<void> {
      try {
        const { id } = req.params;
        const rowsDeleted = await todoService.deleteTask(Number(id));
  
        if (rowsDeleted > 0) res.json({ message: 'Task successfully deleted' });
        else res.status(404).json({ error: 'Task not found or could not be deleted' });
        
      } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
      }
    }
}

const todoController = new TodoController();
export default todoController;