import { Component, OnInit } from '@angular/core';

import { TodoForm } from '../../core/models';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.fetchTodoList();
  }

  createNewTodo(todo: TodoForm) {
    this.todoService.createNewTodo(todo);
  }
}
