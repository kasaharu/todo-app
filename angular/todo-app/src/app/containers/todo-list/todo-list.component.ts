import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../../core/domains';
import { TodoService } from '../../services/todo.service';
import { TodoQuery } from '../../queries/todo.query';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) {
    this.todoList$ = this.todoQuery.todoList$;
  }

  ngOnInit() {}

  registerNewTodo(newTodo) {
    this.todoService.createNewTodo(newTodo);
  }
}
