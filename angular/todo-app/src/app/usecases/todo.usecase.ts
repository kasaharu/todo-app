import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoUsecase {
  constructor(private todoService: TodoService) {}

  initialize() {
    this.todoService.fetchTodoList();
  }
}
