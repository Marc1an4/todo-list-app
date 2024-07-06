import { Request, Response, NextFunction } from 'express';
import boom from 'boom';
import { TodoService } from '../services/TodoService';
import { createTaskSchema, updateTaskSchema } from '../schemas/todoSchema';

const todoService = new TodoService();

export class TodoController {
    public async getAllTasks(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
          const tasks = await todoService.getAllTasks();
          res.json(tasks);
        } catch (error) {
          next(error);
        }
    }

    public async getTaskById(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const { id } = req.params;
        const task = await todoService.getTaskById(Number(id));
  
        if (task) {
          res.json(task);
        } else {
          throw boom.notFound('Task not found');
        }

      } catch (error) {
        next(error);
      }
    }

    public async createTask(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const validationResult = createTaskSchema.validate(req.body, { abortEarly: false });

        if (validationResult.error) {
            throw boom.badRequest(validationResult.error.details.map(d => d.message).join(', '));
        }

        const { title, description, completed } = req.body;
        const newTask = await todoService.createTask({ title, description, completed });
        res.json(newTask);
      } catch (error) {
        next(error);
      }
    } 

    public async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const [, updatedTasks] = await todoService.updateTask(Number(id), { title, description, completed });

        if (updatedTasks && updatedTasks.length > 0) {
          res.json(updatedTasks[0]);
        } else {
          throw boom.notFound('Task not found or could not be updated');
        }
      } catch (error) {
          next(error);
      }
    }

    public async deleteTask(req: Request, res: Response, next: NextFunction): Promise<void> {
      try {
        const { id } = req.params;
        const rowsDeleted = await todoService.deleteTask(Number(id));
  
        if (rowsDeleted > 0) {
          res.json({ message: 'Task successfully deleted' });
        } else {
          throw boom.notFound('Task not found or could not be deleted');
        }
        
      } catch (error) {
        next(error);
      }
    }
}

const todoController = new TodoController();
export default todoController;