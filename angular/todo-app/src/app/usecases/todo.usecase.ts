import { Injectable } from '@angular/core';

import { TodoForm } from '../core/models';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoUsecase {
  constructor(private todoService: TodoService) {}

  initialize() {
    this.todoService.fetchTodoList();
  }

  create(todo: TodoForm) {
    this.todoService.createNewTodo(todo);
  }
}
