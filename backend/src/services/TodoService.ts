import {Todo} from '../models/Todo';

export class TodoService {
    public async getAllTodos(): Promise<Todo[]> {
        return await Todo.findAll();
    }

    public async createTodo(todoData: Partial<Todo>): Promise<Todo> {
        return await Todo.create(todoData);
    }
}