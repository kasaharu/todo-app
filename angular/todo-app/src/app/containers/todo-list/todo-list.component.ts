import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../../core/domains';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todoList$ = this.todoService.todoList$;
  }

  ngOnInit() {}

  registerNewTodo(newTodo) {
    this.todoService.createNewTodo(newTodo);
  }
}
