import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../../core/domains';
import { TodoQuery } from '../../queries/todo.query';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Output()
  createNewTodo = new EventEmitter();

  todoList$: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery) {
    this.todoList$ = this.todoQuery.todoList$;
  }

  ngOnInit() {}

  registerNewTodo(newTodo) {
    this.createNewTodo.emit(newTodo);
  }
}
