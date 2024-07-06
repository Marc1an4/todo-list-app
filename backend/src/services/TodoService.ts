import {Todo} from '../models/Todo';

export class TodoService {
    public async getAllTasks(): Promise<Todo[]> {
        return await Todo.findAll();
    }

    public async getTaskById(id: number): Promise<Todo | null> {
        return Todo.findByPk(id);
    }

    public async createTask(todoData: Partial<Todo>): Promise<Todo> {
        return await Todo.create(todoData);
    }

    public async updateTask(id: number, updatedTodoData: Partial<Todo>): Promise<[number, Todo[]]> {
        return Todo.update(updatedTodoData, {
          where: { id },
          returning: true,
        });
    }

    public async deleteTask(id: number): Promise<number> {
        return Todo.destroy({
          where: { id },
        });
    }
}