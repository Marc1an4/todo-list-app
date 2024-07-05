import { Request, Response } from 'express';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/TodoService';

const todoService = new TodoService();

export class TodoController {

}

const todoController = new TodoController();
export default todoController;