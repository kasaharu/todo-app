import { Injectable } from '@angular/core';

import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery {
  constructor(private todoService: TodoService) {}

  get todoList$() {
    return this.todoService.todoList$;
  }
}
